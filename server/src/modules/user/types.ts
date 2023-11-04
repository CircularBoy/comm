import { Document } from 'mongoose';
import { UserControllerType } from './controller';
import { UserServiceType } from './services/auth-token';
import { IModule } from '../types';

//type where we describe some entity and extends it by document from mongoose
export interface IUserModel extends IUser, Document {}
export interface ITokenModel extends IToken, Document {}

//Main user interface
export interface IUser {
  email: string;
  password: string;
  isActivate?: boolean;
  activationLink?: string;
}

export interface IToken {
  accessToken: string;
  refreshToken: string;
}

// type for describe module where we import controller and service types
export interface IUserModule extends IModule {
  controller: UserControllerType;
  service: UserServiceType;
}
