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
export interface IUtilType extends Document {
  name: string;
  plans: [
    {
      dateStart: string;
      isStaticAmount?: boolean;
      priceRange: [
        {
          price: number;
          readingsPoint: [number, number] | [];
        }
      ];
    }
  ];
}

// export interface IUtilType extends Document {
//   name: string;
//   plans: [
//     {
//       dateStart: string;
//       planValue: [
//         {
//           value: string;
//           stateRangeStart: number; // in some services like electric we need range
//         }
//       ];
//     }
//   ];
// }

export interface IUtilModuleType extends IModule {
  controller: UtilControllerType;
  service: UtilServiceType;
}
