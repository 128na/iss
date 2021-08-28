import { DateTime } from "luxon";

export const logger = (message: string, ...args: any) => {
  const time = DateTime.now().toLocaleString(DateTime.TIME_WITH_SECONDS);
  console.log(`[${time}] ------ ${message} ------`, ...args);
}

export const TRANSLATE_KEY = '# @text';
export const TRANSLATE_SEPALATOR = ':';
