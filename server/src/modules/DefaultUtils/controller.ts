import Util from './model';
import { IUtilType } from './types';
import { utilsList } from '../../helpers/constantsData/utils';

export type DefaultUtilsControllerType = typeof DefaultUtilController;

const DefaultUtilController = {
  // method only for administrator
  async createDefaultUtils(): Promise<IUtilType | null> {
    try {
      console.log(utilsList);
      const createdUtils = await Util.create(utilsList);
      return createdUtils;
    } catch (e) {
      console.log(e);
    }
  },

  async getDefaultUtils() {
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

export default DefaultUtilController;
