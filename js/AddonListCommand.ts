import path from 'path';
import fs from 'fs-extra';
import { Command } from 'commander';
import { AddonCommandOption, definitionWithDat } from './interface';
import { DefinitionLoader } from './libs/DefinitionLoader';
import templateAddons from './templates/addons';

class GenerateAddonListCommand {
  private output: string
  private definitionLoader: DefinitionLoader

  static ICONS = [
    { file: 'icon1.png', size: 256 },
    { file: 'icon2.png', size: 256 },
    { file: 'icon3.png', size: 512 },
  ];

  public constructor({ output }: AddonCommandOption) {
    this.output = output;
    this.definitionLoader = new DefinitionLoader();
  }

  public run() {
    this.copyIconImage();

    const data = this.definitionLoader.loadWithDat();
    this.render(data);
  }

  private copyIconImage(): void {
    GenerateAddonListCommand.ICONS.map(icon => {
      const src = path.resolve(process.cwd(), `./src/${icon.file}`);
      const dest = path.resolve(path.dirname(this.output), `./${icon.file}`);
      fs.copyFileSync(src, dest);
    });
  }

  private render(data: definitionWithDat[]): void {
    fs.ensureFileSync(this.output);
    fs.writeFileSync(this.output, templateAddons(data, GenerateAddonListCommand.ICONS));
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
