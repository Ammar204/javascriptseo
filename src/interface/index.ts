import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

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

export interface navItem {
  name: string,
  url?: string,
  icon?:any
}


// export type nodes = Array<node>
