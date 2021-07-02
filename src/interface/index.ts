export interface node {
  id?: number;
  in?: number;
  out?: number;
  link?: string;
}

export interface rawData {
  Type: string;
  Destination: string;
  Source: string;
  [key: string]: string;
}

export interface link {
    source?: number,
    target?: number
}
// export type nodes = Array<node>
