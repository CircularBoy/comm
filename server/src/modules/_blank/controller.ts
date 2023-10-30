import service from './service';
import { NextFunction, Request, Response } from 'express';

export type BlankControllerType = typeof _blankController;

const _blankController = {
  async getSome(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      // const _blank = await service.getSome(req.params)
      res.status(200).json('some response');
    } catch (e) {
      next(e);
    }
  }
};

// export default new HouseController();
export default _blankController;
