import Util from './model';
import { IUtilType } from './types';

export type DefaultUtilsServiceType = typeof DefaultUtilsService;

const DefaultUtilsService = {
  async createDefaultUtils(data: IUtilType): Promise<IUtilType | null> {
    try {
      const createdDefaultUtils: IUtilType = await Util.create(data);
      return createdDefaultUtils;
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
  }
};

export default DefaultUtilsService;
