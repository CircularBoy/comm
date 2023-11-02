import { Document } from 'mongoose';
import { UserControllerType } from './controller';
import { UserServiceType } from './service';
import { IModule } from '../types';

//type where we describe some entity and extends it by document from mongoose
export interface IUserModel extends IUser, Document {}

//Main user interface
export interface IUser {
  email: string;
  password: string;
  isActivated?: boolean;
  activationLink?: string;
}

// type for describe module where we import controller and service types
export interface IUserModule extends IModule {
  controller: UserControllerType;
  service: UserServiceType;
}
