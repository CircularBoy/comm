import { Document } from 'mongoose';
import { HouseControllerType } from './controller';
import { IModule } from '../types';
import { HouseServiceType } from './service';
import { IHouse } from "../../../../shared/types/house-types";

export type IHouseModel = IHouse & Document
export type IHouseWithoutId = Omit<IHouse, '_id'>;

export interface IHouseModuleType extends IModule {
  controller: HouseControllerType;
  service: HouseServiceType;
}
