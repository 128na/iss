import fs from 'fs-extra';
import path from "path";
import { definition, definitionWithDat } from "../interface";
import { Dat } from 'simutrans-dat-parser';

export class DefinitionLoader {

  public load(definitionpath?: string): definition[] {
    const filepath = path.resolve(process.cwd(), definitionpath || './src/definitions.js');
    return require(filepath);
  }

  public loadWithDat(): definitionWithDat[] {
    return this.load().map(def => Object.assign(def, {
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
