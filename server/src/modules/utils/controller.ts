import service from './service';
import { Request, Response } from 'express';

export type UtilControllerType = typeof UtilController;
const UtilController = {
  async createUtils(req: Request, res: Response): Promise<void> {
    try {
      const data = req.body;
      const util = await service.createUtils(data);
      res.status(200).json(util);
    } catch (e) {
      /////////////
      console.log('--------------');
      console.log(__filename);
      console.log('^^^^^^^^');
      console.log(e);
      /////////////
      res.status(400).json('helper get all error: ' + e);
    }
  },

  async addPlan(req: Request, res: Response): Promise<void> {
    try {
      const serviceId = req.params.id;
      const data = { data: req.body, serviceId };
      const pay = await service.addPlan(data);
      console.log('controller', pay);
      res.status(200).json(pay);
    } catch (e) {
      console.log(e);
      res.status(400).json('helper get all error: ' + e);
    }
  },

  async getUtils(req: Request, res: Response): Promise<void> {
    try {
      // const addressName = req.query.addressName
      const pays = await service.getUtils();
      res.status(200).json(pays);
    } catch (e) {
      console.log(e);
      res.status(400).json('pay get all error: ' + e);
    }
  }
};

export default UtilController;
