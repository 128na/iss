import templateAddons from './templates/addons';
import { Command } from 'commander';
import { definition, definitionWithDat, ListingCommandOption, parsedObj } from './interface';
import { TRANSLATE_KEY } from './util';
import path from 'path';
import fs from 'fs-extra';
import { Dat } from 'simutrans-dat-parser';
import addons from './templates/addons';

class GenerateAddonListCommand {
  private output: string

  public constructor({ output }: ListingCommandOption) {
    this.output = output;
  }

  public run() {
    const filepath = path.resolve(process.cwd(), './src/definitions.js');
    const definitions: definition[] = require(filepath);

    const data = definitions.map(def => Object.assign(def, {
      datFiles: def.datFiles.map(this.parseDatFile)
    }));
    this.copyIconImage();

    this.render(data);
  }

  private parseDatFile(datFile: string): { datFile: string, dat: Dat } {
    const filepath = path.resolve(process.cwd(), './src', datFile);
    return {
      datFile,
      dat: new Dat(fs.readFileSync(filepath).toString())
    }
  }

  private copyIconImage(): void {
    const src = path.resolve(process.cwd(), './src/icon.png');
    const dest = path.resolve(path.dirname(this.output), './icon.png');
    fs.copyFileSync(src, dest);

  }

  private render(data: definitionWithDat[]) {
    fs.writeFileSync(this.output, addons(data));
  }

}

const runner = new Command('build');
runner
  .description('obj一覧を出力します。')
  .option('-o, --output <directory>', 'Output directory path', './docs/addons/index.md')
  .action((options: ListingCommandOption) => {
    const command = new GenerateAddonListCommand(options);
    try {
      command.run();
    } catch (e) {
      console.log({ e })
    }
  })
  .showHelpAfterError()
  .parse();
