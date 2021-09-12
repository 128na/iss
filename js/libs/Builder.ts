require('dotenv').config();

import fs from 'fs-extra';
import path from 'path';
import { Makeobj } from 'simutrans-makeobj-wrapper';
const reload = require('require-reload')(require);

import { buildCommandOption, definition } from "../interface";
import ImageManager from '../managers/ImageManager';
import { logger } from '../util';

export class Builder {
  private definition: string
  protected source: string
  protected output: string
  private changedFile: string

  private imageManager: ImageManager
  protected makeobj: Makeobj

  public constructor({ definition, source, output }: buildCommandOption) {
    this.definition = definition;
    this.changedFile = '';
    this.source = source;
    this.output = output;
    this.imageManager = new ImageManager();
    this.makeobj = new Makeobj(process.env.MAKEOBJ_PATH);
  }

  public async run(changedFile?: string): Promise<string[]> {
    this.changedFile = changedFile || '';
    if (!this.changedFile) {
      fs.emptyDirSync(this.output);
    }
    return await this.handleDefinitions();
  }

  protected async handleDefinitions(): Promise<string[]> {
    const definitions = this.loadDefinitions();
    const pakFiles = [];
    for (const definition of definitions) {
      pakFiles.push(await this.handleDefinition(definition));
    }
    return pakFiles;
  }

  private loadDefinitions(): definition[] {
    const def = path.resolve(process.cwd(), this.definition);
    logger('loadDefinitions', def);
    return reload(def);
  }

  private async handleDefinition(definition: definition): Promise<string> {
    if (!this.shouldBuild(definition)) {
      logger('skip build', definition.pakFile);
      return definition.pakFile;
    }

    logger('build', definition.pakFile);
    await this.merge(definition);
    const datFiles = this.copyDatFiles(definition);
    return this.pak(definition, datFiles);
  }

  private shouldBuild(definition: definition): boolean {
    if (!this.changedFile) {
      return true;
    }
    return definition.datFiles.some(d => this.changedFile.includes(d))
      || Object.entries(definition.imageSet).some(([k, images]) => images.some(i => this.changedFile.includes(i)))
  }

  private async merge(definition: definition) {
    for (const [key, value] of Object.entries(definition.imageSet)) {
      logger('mergeImages', key, value);
      await this.imageManager.merge(`${this.output}/${key}`, value.map(v => `${this.source}/${v}`))
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
    const result = this.makeobj.pak(definition.size, pakFile, ...datFiles);
    logger('pak', result);
    if (!result.isSuccess) {
      throw new Error('pak failed ' + pakFile);
    }

    return pakFile;
  }
}
