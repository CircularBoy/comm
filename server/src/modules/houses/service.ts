import House from './model';
import { HouseType } from './types';
import { utilsList } from '../../helpers/constantsData/utils';

export type HouseServiceType = typeof HouseService;
// class HouseService {
//   async createHouse(house: HouseType): Promise<HouseType | null> {
//     try {
//       const createdHouse = await House.create(house);
//       return createdHouse;
//     } catch (e) {
//       console.log(e);
//       return null;
//     }
//   }
//
//   async getHouses() {
//     try {
//       const houses: HouseType[] = await House.find();
//       console.log('get _blank from db', houses);
//       return houses;
//     } catch (e) {
//       console.log(e);
//     }
//   }
//
//   // async updateOne(id) {
//   //   try {
//   //   } catch (e) {}
//   // }
// }
const HouseService = {
  createHouse: async (house: HouseType): Promise<HouseType | null> => {
    try {
      console.dir(utilsList[0].plans[0].priceRange);
      const houseData = { ...house, utils: utilsList };
      console.log(houseData);
      const createdHouse = await House.create(houseData);
      return createdHouse;
    } catch (e) {
      console.log(e);
      return null;
    }
  },

  getHouses: async () => {
    try {
      const houses: HouseType[] = await House.find();
      console.log('get _blank from db', houses);
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
