import Util from './model';
import { IUtilType, IUtilTypeModel } from './types';

export type UtilServiceType = typeof UtilService;

const UtilService = {
  // async createUtils(data: IUtilType): Promise<IUtilTypeModel | null> {
  //   try {
  //     console.log(data);
  //     const createdService: IUtilTypeModel = await Util.create(data);
  //     return createdService;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // },

  async createUtils(data: IUtilType[]): Promise<IUtilType[] | null> {
    try {
      console.log({ data });
      const createdUtils: IUtilType[] = await Util.insertMany(data);
      return createdUtils;
    } catch (e) {
      console.log(e);
    }
  },

  async getUtils(): Promise<IUtilType[] | null> {
    try {
      const utils = await Util.find();
      console.log(utils instanceof Util);
      utils.map((item) => {
        console.log(item._id);
      });
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
