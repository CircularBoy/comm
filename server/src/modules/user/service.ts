import ApiError from '../../helpers/exceptions/api-errors';
import mongoose from 'mongoose';
import { IUser } from './types';
import User from './models/user';

export type UserServiceType = typeof userService;

const userService = {
  async registration(userData: IUser): Promise<IUser | null> {
    try {
      const createdUser: IUser = await User.create(userData);
      return createdUser;
      // throw ApiError.BadRequest('some string describe error');
    } catch (e) {
      console.log(e);
    }
  }
};

// export default new HouseService();
export default userService;
