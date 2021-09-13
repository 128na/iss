import { DateTime } from 'luxon';
import { Dat, Obj } from 'simutrans-dat-parser';
import { definitionWithDat } from "../interface";
import { TRANSLATE_KEY } from '../util';

export default (data: definitionWithDat[]) =>
  `This file was generated by \`npm run listing\` command at ${DateTime.now().toLocaleString(DateTime.DATETIME_FULL)}.

# アドオン一覧

${data.map(renderDef).join('\n')}
`;

const renderDef = (def: definitionWithDat): string =>
  `## \`${def.pakFile}\`

${def.datFiles.map(renderDat).join('\n')}
`;

const renderDat = ({ datFile, dat }: { datFile: string, dat: Dat }): string =>
  `### \`${datFile}\`

<table>
  <thead>
    <th>アイコン</th>
    <th>名前</th>
    <th>翻訳</th>
    <th>obj</th>
    <th>waytype</th>
    <th>system_type</th>
  </thead>
  <tbody>
  ${dat.objs.map(renderObj).join('\n')}
  </tbody>
</table>`;

const renderObj = (obj: Obj): string =>
  `<tr>
  <td>${renderIcon(obj)}</td>
  <td>${obj.name}</td>
  <td>${renderTranslate(obj)}</td>
  <td>${obj.obj}</td>
  <td>${obj.findParam('waytype')?.value || 'N/A'}</td>
  <td>${obj.findParam('system_type')?.value || 'N/A'}</td>
</tr>`;

const renderIcon = (obj: Obj): string => {
  const icon = obj.findParam('icon');
  if (!icon) {
    return 'N/A';
  }

  const baseStyle = "width:32px;height:32px;background-image:url(./icon.png);";
  const position = `background-position:left ${-icon.valueParams[1] * 256}px top ${-icon.valueParams[0] * 256}px`;
  return `<div style="${baseStyle}${position}"></div>`;
};

const renderTranslate = (obj: Obj): string => obj.comments
  .filter(c => c.value.startsWith(TRANSLATE_KEY))
  .map(c => c.value.replace(TRANSLATE_KEY, '').trim() || '')
  .join('<br>');

