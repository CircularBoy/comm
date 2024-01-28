import { Document } from 'mongoose';
import { UtilControllerType } from './controller';
import { UtilServiceType } from './service';
import { IModule } from '../types';

// export interface IPlan extends Document {
//   dateStartAt: string;
//   planAmountRange: Array<{
//     amount: number;
//     readingsPoint: [number, number];
//   }>;
// }
export interface IUtilModel extends IUtilType, Document {}

export interface IUtilType {
  name: string;
  tag: 'electricity' | 'gas' | 'transportGas';
  default: boolean;
  plans: [
    {
      dateStart: string;
      isStaticAmount?: boolean;
      priceRange: [
        {
          price: number;
          readingsPoint: [number, number] | []; // in some services like electric we need range
        }
      ];
    }
  ];
}

export interface IUtilModuleType extends IModule {
  controller: UtilControllerType;
  service: UtilServiceType;
}
