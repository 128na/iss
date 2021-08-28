export const regNewLine = /\n+/mgi;
export const regSpecial = /\s+/gi;

export const regObjSplitter = /---+/gi;

export const regParam = /^([^=]*)(=> |=)?(.*)?$/i;

export const regKeyParamAll = /\[([\w\d-]*)\]/ig;
export const regKeyParam = /\[([\w\d-]*)\]/i;
export const regValueParam = /[\.,]([-\d]*)/ig;

export const regFilename = /^[\d\w-_]*$/i;
