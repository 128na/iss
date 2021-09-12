import fs from 'fs-extra';
import path from "path";
import { AddonCommandOption, definition, definitionWithDat } from "../interface";
import { Dat } from 'simutrans-dat-parser';

export class AddonCommandBase {
  protected output: string

  public constructor({ output }: AddonCommandOption) {
    this.output = output;
  }

  protected loadDefinitions(): definitionWithDat[] {
    const filepath = path.resolve(process.cwd(), './src/definitions.js');
    const definitions: definition[] = require(filepath);

    return definitions.map(def => Object.assign(def, {
      datFiles: def.datFiles.map(this.parseDatFile)
    }));
  }

  private parseDatFile(datFile: string): { datFile: string, dat: Dat } {
    const filepath = path.resolve(process.cwd(), './src', datFile);
    return {
      datFile,
      dat: new Dat(fs.readFileSync(filepath).toString())
    }
  }
}
