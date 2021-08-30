import { DateTime } from 'luxon';

export default (lang: string, texts: string[][]) =>
  `§#${lang} generated by \`npm run translate\` command at ${DateTime.now().toLocaleString(DateTime.DATETIME_FULL)}.
${texts.flat().join('\n')}`;