require('dotenv').config();

import fs from 'fs-extra';
const reload = require('require-reload')(require);

import { commandOption, definition, logger } from "./interface";
import FileUpdateManager from './managers/FileUpdateManager';
import ImageManager from './managers/ImageManager';
import MakeobjManager from './managers/MakeobjManager';

export abstract class BuildCommandBase {
  private definition: string
  protected source: string
  protected output: string

  private fileUpdateManager: FileUpdateManager
  private imageManager: ImageManager
  protected makeobjManager: MakeobjManager

  public constructor({ definition, source, output }: commandOption) {
    this.definition = definition;
    this.source = source;
    this.output = output;
    this.fileUpdateManager = new FileUpdateManager();
    this.imageManager = new ImageManager();
    this.makeobjManager = new MakeobjManager(process.env.MAKEOBJ_PATH);
  }

  public abstract run(): void;

  protected async handleDefinitions(): Promise<string[]> {
    const definitions = this.loadDefinitions();

    fs.copySync(`${this.source}/text`, `${this.output}/text`, { overwrite: true });


    const pakFiles = [];
    for (const definition of definitions) {
      pakFiles.push(await this.handleDefinition(definition));
    }
    return pakFiles;
  }

  private loadDefinitions(): definition[] {
    logger('loadDefinitions', this.definition);
    return reload(this.definition);
  }

  private async handleDefinition(definition: definition): Promise<string> {
    await this.mergeImageIfUpdated(definition);
    const datFiles = this.copyDatFiles(definition);
    return this.pak(definition, datFiles);
  }

  private async mergeImageIfUpdated(definition: definition) {
    for (const [key, value] of Object.entries(definition.imageSet)) {
      if (value.some(v => this.fileUpdateManager.updated(`${this.source}/${v}`))) {
        value.map(v => this.fileUpdateManager.put(`${this.source}/${v}`));
        logger('mergeImages', key, value);
        await this.imageManager.merge(`${this.output}/${key}`, value.map(v => `${this.source}/${v}`))
      }
    }
  }

  private copyDatFiles(definition: definition): string[] {
    logger('copyDatFiles', definition.datFiles);
    return definition.datFiles.map(d => {
      const dest = `${this.output}/${d}`;
      fs.copySync(`${this.source}/${d}`, dest, { overwrite: true });
      return dest;
    });
  }

  private pak(definition: definition, datFiles: string[]): string {
    const pakFile = `${this.output}/${definition.pakFile}`;
    const result = this.makeobjManager.pak(pakFile, datFiles, definition.size);
    logger('pak', result);
    if (result.status !== 0) {
      throw new Error('pak failed ' + pakFile);
    }

    return pakFile;
  }
}
