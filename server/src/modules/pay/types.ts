import { Document } from 'mongoose';
import { PayControllerType } from './controller';
import { PayServiceType } from './service';
import { IModule } from '../types';

export interface IPayModel extends IPay, Document {}
export interface IPay {
  month: string;
  addressId: string; // attention
  utilId: string;
  lastStat: number;
  newStat: number;
  // planValue: [{
  // 	value: {type: Number, required: true},
  // 	fromStat: {type: Number, required: true}
  // }],
  // isPlanNew: {type: Boolean, required: true},
  toPay: number;
}

export interface IPayModuleType extends IModule {
  controller: PayControllerType;
  service: PayServiceType;
}
