import service from './services/auth-token';
import { NextFunction, Request, Response } from 'express';
import { IUser } from './types';

export type UserControllerType = typeof userController;

const userController = {
  async registration(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const createdUser = await service.registration(req.body);
      console.log({ createdUser });
      res.status(200).json('some response');
    } catch (e) {
      next(e);
    }
  },

  async getUsers(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      // const user = await service.registration();
      // res.status(200).json('some response');
    } catch (e) {
      next(e);
    }
  }
};

// export default new HouseController();
export default userController;
