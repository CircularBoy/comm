import service from './service';
import { Request, Response } from 'express';
import { utilsList } from '../../helpers/constantsData/utils';
import { IUtilType } from './types';

export type UtilControllerType = typeof UtilController;
const UtilController = {
  async createDefaultUtils(req: Request, res: Response): Promise<void> {
    try {
      const data: IUtilType[] = utilsList;
      // const data = req.body;
      const util = await service.createDefaultUtils(data);
      res.status(200).json(util);
    } catch (e) {
      console.log(e);
      res.status(400).json('helper get all error: ' + e);
    }
  },

  async getUtils(req: Request, res: Response): Promise<void> {
    try {
      // const addressName = req.query.addressName
      const utils = await service.getUtils();
      res.status(200).json(utils);
    } catch (e) {
      console.log(e);
      res.status(400).json('helper get all error: ' + e);
    }
  },

  async deleteUtils(req: Request, res: Response): Promise<void> {
    try {
      const utils = await service.deleteUtils();
      res.status(200).json(utils);
    } catch (e) {
      console.log(e);
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
  }
};

export default UtilController;
