import { Document } from 'mongoose';
import { UtilControllerType } from './controller';
import { UtilServiceType } from './service';
import { IModule } from '../types';
import { IUtil } from "../../../../shared/types/util-types";

// export interface IPlan extends Document {
//   dateStartAt: string;
//   planAmountRange: Array<{
//     amount: number;
//     readingsPoint: [number, number];
//   }>;
// }
export interface IUtilModel extends IUtilType, Document {}

export type IUtilType = IUtil
export interface IUtilModuleType extends IModule {
  controller: UtilControllerType;
  service: UtilServiceType;
}
