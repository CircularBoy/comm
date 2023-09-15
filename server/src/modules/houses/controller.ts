import service from './service';
import { HouseType } from './types';
import { Request, Response } from 'express';

export type HouseControllerType = typeof HouseController;
// class HouseController {
//   async createHouse(req: Request, res: Response): Promise<void> {
//     try {
//       console.log(req.body);
//       const createdHouse: HouseType | null = await service.createHouse(
//         req.body
//       );
//       res.status(200).json(createdHouse);
//       // res.status(200).json('create');
//     } catch (e) {
//       console.log(e);
//       res.status(400).json('house create error: ' + e);
//     }
//   }
//
//   async getHouses(req: Request, res: Response): Promise<void> {
//     try {
//       // const _blank = await service.getHouses(req.params)
//       const houses = [
//         { name: 'teatralna', pays: [2314324324, 324234234234] },
//         { name: 'dedushka', pays: [2314324324, 324234234234] }
//       ];
//       res.status(200).json(houses);
//     } catch (e) {
//       console.log(e);
//       res.status(400).json('house get all error: ' + e);
//     }
//   }
// }
const HouseController = {
  createHouse: async (req: Request, res: Response): Promise<void> => {
    try {
      const createdHouse: HouseType | null = await service.createHouse(
        req.body
      );
      res.status(200).json(createdHouse);
      // res.status(200).json('create');
    } catch (e) {
      console.log(e);
      res.status(400).json('house create error: ' + e);
    }
  },

  getHouses: async (req: Request, res: Response): Promise<void> => {
    try {
      const houses = await service.getHouses();
      // const houses = [
      //   { name: 'teatralna', pays: [2314324324, 324234234234] },
      //   { name: 'dedushka', pays: [2314324324, 324234234234] }
      // ];
      res.status(200).json(houses);
    } catch (e) {
      console.log(e);
      res.status(400).json('house get all error: ' + e);
    }
  }
};

// export default new HouseController();
export default HouseController;
