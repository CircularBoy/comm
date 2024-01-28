import { parsePrice } from '../utils';
import { IUtilType } from '../../modules/util/types';

// const UTILS = [
//   {
//     name: 'Electricity',
//     plans: [
//       {
//         dateStart: '20.12.2023',
//         priceRange: [
//           {
//             price: parsePrice(1.6),
//             readingsPoint: [0, 100]
//           }
//         ]
//       }
//     ]
//   },
//   {
//     name: 'Gas',
//     plans: [
//       {
//         dateStart: '20.12.2023',
//         priceRange: [
//           {
//             price: parsePrice(7.96),
//             readingsPoint: []
//           }
//         ]
//       }
//     ]
//   },
//   {
//     name: 'Delivery gas',
//     plans: [
//       {
//         dateStart: '20.12.2023',
//         isStaticAmount: true,
//         priceRange: [
//           {
//             price: parsePrice(123),
//             readingsPoint: [50, 150]
//           }
//         ]
//       }
//     ]
//   }
// ];

export const utilsList: IUtilType[] = [
  {
    name: 'Electricity',
    tag: 'electricity',
    default: true,
    plans: [
      {
        dateStart: '20.06.2023',
        priceRange: [
          {
            price: parsePrice(2.6),
            readingsPoint: []
          }
        ]
      }
    ]
  },
  {
    name: 'Gas',
    tag: 'gas',
    default: true,
    plans: [
      {
        dateStart: '20.06.2023',
        priceRange: [
          {
            price: parsePrice(7.96),
            readingsPoint: []
          }
        ]
      }
    ]
  },
  {
    name: 'Delivery gas',
    tag: 'transportGas',
    default: true,
    plans: [
      {
        dateStart: '20.06.2023',
        isStaticAmount: true,
        priceRange: [
          {
            price: parsePrice(123),
            readingsPoint: []
          }
        ]
      }
    ]
  }
];
