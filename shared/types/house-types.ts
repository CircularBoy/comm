import { IUtil } from "./util-types";

export interface IHouse {
  _id: string;
  name: string;
  address: string;
  pays: number;
  utils?: Array<IUtil>;
}

