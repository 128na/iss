export interface definition {
  size: number
  pakFile: string
  datFiles: string[]
  imageSet: {
    [index: string]: string[]
  }
}

export interface buildCommandOption {
  definition: string
  source: string
  output: string
}

export interface serveCommandOption extends buildCommandOption {
  paklib: string
}

export const logger = (message: string, ...args: any) => {
  const d = new Date();
  console.log(`[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}] ------ ${message} ------`, ...args);
}

export interface makeojbResponse {
  status: number | null,
  stdout: string,
  stderr: string,
}
