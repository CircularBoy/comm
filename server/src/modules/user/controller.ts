import service from './services/auth';
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
      const { refreshToken } = await service.registration(req.body);

      //add domain on production
      res.cookie('refreshToken', refreshToken, {
        maxAge: 1000 * 60 * 30,
        httpOnly: true
      });
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
  },

  async activationAccount(req: Request, res: Response, next: NextFunction) {
    try {
      const { activationLink } = req.params;
      const user = await service.activationAccount(activationLink);
      console.log('controller', user);
      res.json({ user });
    } catch (e) {
      next(e);
    }
  }
};

// export default new HouseController();
export default userController;
