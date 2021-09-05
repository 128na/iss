import { Dat } from "simutrans-dat-parser";

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

export interface AddonCommandOption {
  source: string
  output: string
}
export interface ListingCommandOption extends AddonCommandOption {
  format: string
}

export interface makeojbResponse {
  status: number | null,
  stdout: string,
  stderr: string,
}

export interface parsedDat {
  file: string
  dat: Dat
}

export interface parsedObj {
  obj: string
  name: string
  waytype: string
  system_type: string
  translates: string[]
}
