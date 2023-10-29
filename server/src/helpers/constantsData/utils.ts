import { parsePrice } from '../utils';
import { IUtilType } from '../../modules/utils/types';

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
    plans: [
      {
        dateStart: '20.12.2023',
        priceRange: [
          {
            price: parsePrice(1.6),
            readingsPoint: [0, 100]
          }
        ]
      }
    ]
  },
  {
    name: 'Gas',
    plans: [
      {
        dateStart: '20.12.2023',
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
    plans: [
      {
        dateStart: '20.12.2023',
        isStaticAmount: true,
        priceRange: [
          {
            price: parsePrice(123),
            readingsPoint: [50, 150]
          }
        ]
      }
    ]
  }
];
