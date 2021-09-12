import fs from 'fs-extra';
import { Command } from 'commander';
import { AddonCommandOption, definitionWithDat } from './interface';
import { AddonCommandBase } from './libs/AddonCommandBase';
import templateTranslate from './templates/translate';
import { Dat, Obj } from 'simutrans-dat-parser';
import { TRANSLATE_KEY, TRANSLATE_SEPALATOR } from './util';

interface langs {
  [index: string]: string[][]
}

class GenerateTranslateCommand extends AddonCommandBase {

  public run() {
    const data = this.createData();
    this.render(data);
  }

  private createData(): langs {
    return this.loadDefinitions()
      .flatMap((def) => def.datFiles.map(d => d.dat))
      .flatMap((dat): Obj[] => dat.objs)
      .map(obj => {
        return {
          name: obj.findParam('name')?.value || '',
          langs: obj.comments
            .filter(p => p.value.startsWith(TRANSLATE_KEY))
            .map(p => p.value.replace(TRANSLATE_KEY, ''))
            .map(s => s.split(TRANSLATE_SEPALATOR).map(t => t.trim()))
        }
      })
      .reduce((langs: langs, current): langs => {
        current.langs.map(([lang, text]) => {
          langs[lang]
            ? langs[lang].push([current.name, text])
            : langs[lang] = [[current.name, text]];
        });
        return langs;
      }, {});
  }

  private render(langs: langs) {
    for (const [lang, texts] of Object.entries(langs)) {
      const content = templateTranslate(lang, texts);
      const filename = `${this.output}/${lang}.iss.tab`;
      fs.ensureFileSync(filename);
      fs.writeFileSync(filename, content);
    }
  }
}

const runner = new Command('build');
runner
  .description('obj一覧を出力します。')
  .option('-s, --source <directory>', 'Source directory path', './src')
  .option('-o, --output <directory>', 'Output directory path', './src/text')
  .action((options: AddonCommandOption) => {
    const command = new GenerateTranslateCommand(options);
    try {
      command.run();
    } catch (e) {
      console.log({ e })
    }
  })
  .showHelpAfterError()
  .parse();
