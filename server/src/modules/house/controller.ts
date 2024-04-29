import service from './service';
import { IHouseModel } from './types';
import { NextFunction, Request, Response } from 'express';

export type HouseControllerType = typeof HouseController;

const HouseController = {
  createHouse: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const createdHouse: IHouseModel | null = await service.createHouse(
        req.body
      );
      res.status(200).json(createdHouse);
    } catch (e) {
      next(e);
    }
  },

  getHouses: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const houses: IHouseModel[] = await service.getHouses();
      console.log('controller houses', houses, typeof houses);
      res.status(200).json(houses);
    } catch (e) {
      next(e);
      // console.log(e);
      // res.status(400).json('house get all error: ' + e);
    }
  }
};

// export default new HouseController();
export default HouseController;
