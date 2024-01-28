import { Document } from 'mongoose';
import { HouseControllerType } from './controller';
import { IModule } from '../types';
import { IUtilModel } from '../util/types';
import { HouseServiceType } from './service';

export interface IHouseModel extends IHouse, Document {}

export interface IHouse {
  name: string;
  address: string;
  pays: number;
  utils?: Array<IUtilModel>;
}

// export interface HouseType extends Document {
//   name: string;
//   address: string;
//   pay?: number;
// }

export interface IHouseModuleType extends IModule {
  controller: HouseControllerType;
  service: HouseServiceType;
}
