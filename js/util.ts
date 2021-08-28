export const logger = (message: string, ...args: any) => {
  const d = new Date();
  console.log(`[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}] ------ ${message} ------`, ...args);
}

export const TRANSLATE_KEY = '# @text';
export const TRANSLATE_SEPALATOR = ':';
