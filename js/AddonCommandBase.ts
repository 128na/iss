import FileReader from './libs/FileReader';
import { Dat } from 'simutrans-dat-parser';
import { AddonCommandOption, parsedDat } from './interface';

export abstract class AddonCommandBase {
  private source: string
  protected output: string
  protected fileReader: FileReader
  protected parsed: parsedDat[];

  public constructor({ source, output }: AddonCommandOption) {
    this.source = source;
    this.output = output;
    this.fileReader = new FileReader();
    this.parsed = this.parse();
  }

  abstract run(): void;

  private parse(): parsedDat[] {
    const files = this.fileReader.getFiles(this.source, '.dat');

    return files.map(file => {
      const dat = new Dat(this.fileReader.readFile(file));

      return { file, dat }
    });
  }
}
