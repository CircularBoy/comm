import { Document } from 'mongoose';
import { HouseControllerType } from './controller';
import { IModule } from '../types';
import { HouseServiceType } from './service';
import { IHouse } from "../../../../shared/types/house-types";

export interface IHouseModel extends IHouse, Document {}

export interface IHouseModuleType extends IModule {
  controller: HouseControllerType;
  service: HouseServiceType;
}
