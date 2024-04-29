import { Document } from 'mongoose';
import { HouseControllerType } from './controller';
import { IModule } from '../types';
import { HouseServiceType } from './service';
import { IHouse } from "../../../../shared/types/house-types";

// export interface IHouseModel extends IHouse, Document {}
export type IHouseModel = IHouse & Document

// export interface IHouse {
//   _id: string;
//   name: string;
//   address: string;
//   pays: number;
//   utils?: Array<IUtilModel>;
// }

// export interface HouseType extends Document {
//   name: string;
//   address: string;
//   pay?: number;
// }

export interface IHouseModuleType extends IModule {
  controller: HouseControllerType;
  service: HouseServiceType;
}
