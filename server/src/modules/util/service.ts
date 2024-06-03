import Util from './model';
import { IUtilType, IUtilModel } from './types';

export type UtilServiceType = typeof UtilService;

const UtilService = {
  async createDefaultUtils(
    data: IUtilType | IUtilType[]
  ): Promise<IUtilModel | null | IUtilModel[]> {
    try {
      const isManyUtils = Array.isArray(data);
      let createdData: IUtilModel | IUtilModel[];
      if (isManyUtils) {
        createdData = await Util.create(data);
      } else {
        createdData = await Util.insertMany(data);
      }
      return createdData;
    } catch (e) {
      console.log(e);
    }
  },

  async getUtils(): Promise<IUtilModel[] | null> {
    try {
      const utils = await Util.find();
      utils.map((item) => {
        console.log(item._id);
      });
      return utils;
    } catch (e) {
      console.log(e);
    }
  },

  async deleteUtils() {
    try {
      const utils = await Util.deleteMany();
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
