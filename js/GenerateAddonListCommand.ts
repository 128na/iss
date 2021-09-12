import path from 'path';
import fs from 'fs-extra';
import { Command } from 'commander';
import { AddonCommandOption, definitionWithDat } from './interface';
import { AddonCommandBase } from './libs/AddonCommandBase';
import templateAddons from './templates/addons';

class GenerateAddonListCommand extends AddonCommandBase {
  public run() {
    this.copyIconImage();

    const data = this.loadDefinitions();
    this.render(data);
  }

  private copyIconImage(): void {
    const src = path.resolve(process.cwd(), './src/icon.png');
    const dest = path.resolve(path.dirname(this.output), './icon.png');
    fs.copyFileSync(src, dest);

  }

  private render(data: definitionWithDat[]): void {
    fs.ensureFileSync(this.output);
    fs.writeFileSync(this.output, templateAddons(data));
  }
}

const runner = new Command('build');
runner
  .description('obj一覧を出力します。')
  .option('-o, --output <directory>', 'Output directory path', './docs/addons/index.md')
  .action((options: AddonCommandOption) => {
    const command = new GenerateAddonListCommand(options);
    try {
      command.run();
    } catch (e) {
      console.log({ e })
    }
  })
  .showHelpAfterError()
  .parse();
