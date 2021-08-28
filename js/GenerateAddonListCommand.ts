import templateAddons from './templates/addons';
import { Command } from 'commander';
import { ListingCommandOption, parsedObj } from './interface';
import { AddonCommandBase } from './AddonCommandBase';
import { TRANSLATE_KEY } from './util';

class GenerateAddonListCommand extends AddonCommandBase {
  private format: string

  public constructor({ format, source, output }: ListingCommandOption) {
    super({ source, output });
    this.format = format;
  }
  public run() {
    const content = this.formatting();
    this.fileReader.writeFile(this.output, content);
  }

  private createData(): { file: string, objs: parsedObj[] }[] {
    return this.parsed.map(({ file, dat }) => {
      return {
        file,
        objs: dat.objs.map(o => {
          return {
            obj: o.findParam('obj')?.value || 'N/A',
            name: o.findParam('name')?.value || 'N/A',
            waytype: o.findParam('waytype')?.value || 'N/A',
            system_type: o.findParam('system_type')?.value || 'N/A',
            translates: o.comments
              .filter(c => c.value.startsWith(TRANSLATE_KEY))
              .map(c => c.value.replace(TRANSLATE_KEY, '').trim() || '')
          }
        })
      }
    });
  }

  private formatting(): string {
    switch (this.format) {
      case 'markdown':
        return templateAddons(this.createData());
      default:
        throw new Error("un spported format");
    }
  }
}

const runner = new Command('build');
runner
  .description('obj一覧を出力します。')
  .option('-f, --format <format>', 'Output format', 'markdown')
  .option('-s, --source <directory>', 'Source directory path', './src')
  .option('-o, --output <directory>', 'Output directory path', './docs/addons.md')
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
