import House from './model';
import { BlankType } from './types';
import ApiError from '../../helpers/exceptions/api-errors';

export type BlankServiceType = typeof blankService;
const blankService = {
  blankMethod: async (): Promise<BlankType | null> => {
    try {
      // const someEntity = await mongooseModel.create(`someData`);
      // return createdHouse;
      throw ApiError.BadRequest('some string describe error');
    } catch (e) {
      console.log(e);
      return null;
    }
  }
};

// export default new HouseService();
export default blankService;
