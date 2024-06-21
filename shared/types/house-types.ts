export type GetHouseResponse = Array<IHouseWithId>;
export type IHouseWithId = IHouse & { _id: string };
export interface IHouse {
  name: string;
  address: string;
  pays: number;
  utils?: number;
}
