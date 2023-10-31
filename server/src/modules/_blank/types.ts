import { Document } from 'mongoose';
import { BlankControllerType } from './controller';
import { BlankServiceType } from './service';
import { IModule } from '../types';

//type where we describe some entity and extends it by document from mongoose
export interface IBlankTypeModel extends BlankType, Document {}

//type of some entity
export interface BlankType {
  name: string;
}

// type for describe module where we import controller and service types
export interface IBlankModule extends IModule {
  controller: BlankControllerType;
  service: BlankServiceType;
}
