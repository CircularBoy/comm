import service from './service';
import { IPaySchema } from './types';
import { Request, Response } from 'express';

export type PayControllerType = typeof PayController;
const PayController = {
  async createPay(req: Request, res: Response): Promise<void> {
    try {
      const data = req?.body;

      const pay: IPaySchema | null = await service.createPay(data);
      res.status(200).json(pay);
    } catch (e) {
      console.log(e);
      res.status(400).json('pay get all error: ' + e);
    }
  },

  async getPays(req: Request, res: Response) {
    try {
      const addressName = req.query.addressName;
      const pays = await service.getPays({ addressName });
      res.status(200).json(pays);
    } catch (e) {
      console.log(e);
      res.status(400).json('pay get all error: ' + e);
    }
  }
};

export default PayController;
