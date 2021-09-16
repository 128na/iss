require('dotenv').config();

import fs from 'fs-extra';
import { Makeobj } from 'simutrans-makeobj-wrapper';

import { buildCommandOption, definition } from "../interface";
import ImageManager from '../managers/ImageManager';
import { logger } from '../util';
import { DefinitionLoader } from './DefinitionLoader';

export class Builder {
  private definition: string;
  private source: string;
  private output: string;
  private changedFile: string;
  private mergedImages: string[] = [];

  private imageManager: ImageManager
  private makeobj: Makeobj
  private definitionLoader: DefinitionLoader

  public constructor({ definition, source, output }: buildCommandOption) {
    this.definition = definition;
    this.changedFile = '';
    this.source = source;
    this.output = output;
    this.imageManager = new ImageManager();
    this.makeobj = new Makeobj(process.env.MAKEOBJ_PATH);
    this.definitionLoader = new DefinitionLoader();
  }

  public async run(changedFile?: string): Promise<string[]> {
    this.changedFile = changedFile?.includes(this.definition) ? '' : changedFile || '';
    this.mergedImages = [];
    if (!this.changedFile) {
      fs.emptyDirSync(this.output);
    }
    return await this.handleDefinitions();
  }

  private async handleDefinitions(): Promise<string[]> {
    const definitions = this.definitionLoader.load(this.definition);
    const pakFiles = [];
    for (const definition of definitions) {
      pakFiles.push(await this.handleDefinition(definition));
    }
    return pakFiles;
  }

  private async handleDefinition(definition: definition): Promise<string> {
    if (!this.shouldBuild(definition)) {
      logger('skip build', definition.pakFile);
      return `${this.output}/${definition.pakFile}`;
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
      const filename = `${this.output}/${key}`;
      if (!this.mergedImages.includes(filename)) {
        logger('mergeImages', key, value);
        await this.imageManager.merge(filename, value.map(v => `${this.source}/${v}`));
        this.mergedImages.push(filename);
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
    const result = this.makeobj.pak(definition.size, pakFile, ...datFiles);
    logger('pak', result);
    if (!result.isSuccess) {
      throw new Error('pak failed ' + pakFile);
    }

    return pakFile;
  }
}
