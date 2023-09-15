import { Document } from 'mongoose';
import { PayControllerType } from './controller';
import { PayServiceType } from './service';
import { IModule } from '../types';

export interface IPaySchema extends Document {
  month: string;
  addressName: string;
  lastStat: number;
  newStat: number;
  diffStat: number;
  // planValue: [{
  // 	value: {type: Number, required: true},
  // 	fromStat: {type: Number, required: true}
  // }],
  // isPlanNew: {type: Boolean, required: true},
  toPay: number;
}

export interface IPayType extends Document {
  month: string;
  addressName: string;
  lastStat: number;
  newStat: number;
  diffStat: number;
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
