import { Document } from 'mongoose';
import { HouseControllerType } from './controller';
import { HouseServiceType } from './service';
import { IModule } from '../types';
import { IUtilTypeModel } from '../utils/types';

export interface HouseType extends Document {
  name: string;
  address: string;
  pays: number;
  utils?: Array<IUtilTypeModel>;
}

// export interface HouseType extends Document {
//   name: string;
//   address: string;
//   pays?: number;
// }

export interface IHouseModuleType extends IModule {
  controller: HouseControllerType;
  service: HouseServiceType;
}
