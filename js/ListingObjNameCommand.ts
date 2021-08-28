import FileReader from './libs/FileReader';
import { Dat } from './libs/Dat';
import templateAddons from './templates/addons';

class ListingObjNameCommand {
  private format: string
  private source: string
  private output: string
  private fileReader: FileReader

  public constructor({ format, source, output }: ListingCommandOption) {
    this.format = format;
    this.source = source;
    this.output = output;
    this.fileReader = new FileReader();
  }

  public run() {
    const parsed = this.parse();
    const markdown = this.toMarkdown(parsed);
    this.fileReader.writeFile(this.output, markdown);
  }

  private toMarkdown(parsed: { file: string, dat: Dat }[]): string {
    return templateAddons(parsed);
  }

  private parse(): { file: string, dat: Dat }[] {
    const files = this.fileReader.getFiles(this.source, '.dat');

    return files.map(file => {
      const dat = new Dat(this.fileReader.readFile(file));

      return { file, dat }
    });
  }
}

import { Command } from 'commander';
import { ListingCommandOption, parsedDat } from './interface';
import { fstat } from 'fs';
import { formatWithOptions } from 'util';
const runner = new Command('build');
runner
  .description('obj一覧を出力します。')
  .option('-f, --format <format>', 'Output format', 'markdown')
  .option('-s, --source <directory>', 'Source directory path', './src')
  .option('-o, --output <directory>', 'Output directory path', './docs/addons.md')
  .action((options: ListingCommandOption) => {
    const command = new ListingObjNameCommand(options);
    try {
      command.run();
    } catch (e) {
      console.log({ e })
    }
  })
  .showHelpAfterError()
  .parse();
