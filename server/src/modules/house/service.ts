import House from './model';
import {  IHouseModel } from './types';
import { utilsList } from '../../helpers/constantsData/utils';
import { IHouse } from "../../../../shared/types/house-types";

export type HouseServiceType = typeof HouseService;
const HouseService = {
  createHouse: async (house: IHouse): Promise<IHouseModel | null> => {
    try {
      const houseData = { ...house, utils: utilsList };
      const createdHouse = await House.create(houseData);
      return createdHouse;
    } catch (e) {
      console.log(e);
      return null;
    }
  },

  getHouses: async (): Promise<IHouseModel[] | null> => {
    try {
      const houses: IHouseModel[] = await House.find();
      console.log('service get houses', houses, houses[0]);
      return houses;
    } catch (e) {
      console.log(e);
    }
  }

  // async updateOne(id) {
  //   try {
  //   } catch (e) {}
  // }
};

// export default new HouseService();
export default HouseService;
