import Util from './model';
import { IUtilType } from './types';

export type UtilServiceType = typeof UtilService;

const UtilService = {
  async createUtils(data: IUtilType): Promise<IUtilType | null> {
    try {
      console.log(data);
      const createdService: IUtilType = await Util.create(data);
      return createdService;
    } catch (e) {
      console.log(e);
    }
  },

  async getUtils() {
    try {
      const utils = await Util.find();
      return utils;
    } catch (e) {
      console.log(e);
    }
  },

  async addPlan(payload) {
    const { serviceId, data } = payload;
    try {
      // const services = await Util.findById(serviceId, async (err, UtilItem) => {
      await Util.findById(serviceId, async (err, UtilItem) => {
        if (UtilItem) {
          UtilItem.plans.push(data);
          return await UtilItem.save();
        }
      });
      return { error: 'error' };
    } catch (e) {
      console.log('error add plan service', e);
    }
  }
};

export default UtilService;
