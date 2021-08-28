import { regKeyParamAll, regNewLine, regObjSplitter, regParam, regSpecial, regValueParam } from "./RegExp";
import { sortForParam } from "./Sort";

export class Dat {
  _objs: Obj[];

  constructor(original: string) {
    let line = 1;
    this._objs = original
      .replace(/\r\n/gi, "\n") // win CRLF -> LF
      .replace(/\r/gi, "\n") // mac CR -> LF
      .replace(regObjSplitter, '---').split('---\n') // 区切り文字の統一
      .filter(l => l)
      .map(o => {
        const obj = new Obj(o, line);
        line = obj.lastLine;
        return obj;
      });
  }

  get objs(): Obj[] {
    return this._objs;
  }

  findObjs(key: string, value: string): Obj[] {
    return this._objs
      .filter(o => o.findParam(key)?.value === value);
  }

  toString(): string {
    return this._objs
      .map(o => o.toString())
      .join('\n---\n')
      .replace(regNewLine, '\n');
  }
}
class Cache {
  _keyMap: { [index: string]: Param | undefined } = { };
  _keyValueMap: { [index: string]: Param[] } = { };

  constructor() {
    // console.log('cache::constructor');
  }

  getKey(key: string): Param | undefined {
    return this._keyMap[key];
  }
  setKey(key: string, value: Param) {
    this._keyMap[key] = value;
  }
  getOrSetKey(key: string, fn: () => Param | undefined): Param | undefined {
    if (this._keyMap[key]) {
      // console.log('using cache', key);
      return this._keyMap[key];
    }
    const newValue = fn();
    this._keyMap[key] = newValue;
    return newValue;
  }

  getKeyValue(keyValue: string): Param[] | undefined {
    return this._keyValueMap[keyValue];
  }
  setKeyValue(keyValue: string, value: Param[]) {
    this._keyValueMap[keyValue] = value;
  }
  getOrSetKeyValue(keyValue: string, fn: () => Param[]): Param[] {
    if (this._keyValueMap[keyValue]) {
      // console.log('using cache', keyValue);
      return this._keyValueMap[keyValue];
    }
    const newValue = fn();
    this._keyValueMap[keyValue] = newValue;
    return newValue;
  }
}

export class Obj {
  _cache: Cache;
  _line: number;
  _params: Param[];

  constructor(original: string, line: number) {
    this._cache = new Cache;
    this._line = line;
    this._params = original
      .split("\n")
      .map(l => new Param(l));
  }

  get firstLine(): number {
    return this._line;
  }
  get lastLine(): number {
    return this._line + this._params.length;
  }
  get obj(): string | undefined {
    return this.findParam('obj')?.valueVal;
  }
  get name(): string | undefined {
    return this.findParam('name')?.valueVal;
  }

  updateFromString(original: string) {
    this._params = original
      .split("\n")
      .map(l => new Param(l));
    this._cache = new Cache;
  }
  updateOrCreate(key: string, value: string, operator = '=') {
    const param = this.findParam(key);
    if (param) {
      param.value = value;
      param._operator = operator;
    } else {
      this.updateFromString(`${this.toString()}\n${key}${operator}${value}`);
    }
  }
  deleteByKeyVal(keyVal: string, ...keyParams: [[string]]) {
    this._params = this._params
      .filter(p => p.keyVal !== keyVal || !keyParams.every((kp, i) => (kp.includes(p.keyParams[i]))));
    this._cache = new Cache;
  }

  /**
   * 指定キー値を含むParamを探す
   */
  findParamsByKeyVal(keyVal: string): Param[] {
    return this._cache.getOrSetKeyValue(keyVal, () =>
      this._params.filter(p => p.keyVal === keyVal)
    );
  }
  /**
   * 指定キーに一致するParamを探す
   */
  findParam(key: string): Param | undefined {
    return this._cache.getOrSetKey(key, () =>
      this._params.find(p => p.key === key)
    );
  }
  /**
   * 指定キーっぽいやつを探す
   * hoge[0][1][2] -> hoge[0][1][2][0][0][0], hoge[0][1][2][0][0], hoge[0][1][2][0], hoge[0][1][2], hoge[1][2], hoge[2]
   */
  findParamLike(key: string): Param | undefined {
    const keyParams = [...key.matchAll(regKeyParamAll)].map(p => p[1] || "");
    const last = keyParams.length - keyParams.slice().reverse().findIndex(p => p !== '0');

    let keyPattern = key.split('[0]')[0];
    for (let count = 0; count <= 6 - last; count++) {
      const param = this.findParam(keyPattern);
      if (param) {
        return param;
      }
      keyPattern += '[0]';
    }
  }
  findMaxParamKeyVal(keyVals: string[], index: number, defaultValue = 1): number {
    const params = keyVals.flatMap(keyVal => this.findParamsByKeyVal(keyVal));
    return params.reduce((curr, param) => Math.max(curr, Number(param.keyParams[index])), defaultValue);
  }

  toString(): string {
    this._params.sort(sortForParam);
    return this._params
      .filter(p => !p.isEmpty)
      .map(p => p.toString())
      .join("\n");
  }
}

/**
 * dat記述の1行
 * foo=bar
 */
export class Param {
  _key: Key;
  _operator: string;
  _value: Value;

  constructor(original: string) {
    const tmp = original
      .split('#')[0]    // 末尾コメントを削除
      .match(regParam) || [];

    // フォーマット不一致なら値として処理する（コメント行）
    if (!tmp[2]) {
      this._key = new Key("");
      this._operator = "";
      this._value = new Value(tmp[1] || "");
    } else {
      this._key = new Key((tmp[1] || "").toLowerCase());
      this._operator = tmp[2] || "";
      this._value = new Value(tmp[3] || "");
    }
  }

  get key(): string {
    return this._key._original;
  }
  set key(key: string) {
    this._key = new Key(key);
  }
  get value(): string {
    return this._value._original;
  }
  set value(value: string) {
    this._value = new Value(value);
  }

  get keyVal(): string {
    return this._key._val;
  }
  get keyParams(): string[] {
    return this._key._params;
  }
  get keyParam(): string {
    return this._key._params.join(',');
  }

  get valueVal(): string {
    return this._value._val;
  }
  get valueParams(): number[] {
    return this._value._params;
  }
  get valueParam(): string {
    return this._value._params.join(',');
  }

  get isEmpty(): boolean {
    return !this.value
  }

  get isComment(): boolean {
    return this.valueVal.startsWith('#');
  }
  get isSplit(): boolean {
    return this.valueVal.startsWith('---');
  }

  toString(): string {
    return `${this.key}${this._operator}${this.value}`;
  }
}

class Key {
  _original: string;
  _val: string;
  _params: string[];

  constructor(original: string) {
    this._original = original.replace(regSpecial, '')
    this._val = this._original.split("[")[0] || "";
    this._params = [...this._original.matchAll(regKeyParamAll)].map(p => p[1] || "");
  }
}

class Value {
  _original: string;
  _val: string;
  _params: number[];

  constructor(original: string) {
    this._original = original.replace(regSpecial, '')
    this._val = this._original.split(".")[0] || "";
    this._params = [...this._original.matchAll(regValueParam)].map(p => parseInt(p[1], 10) || 0);
  }
}
