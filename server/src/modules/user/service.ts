import ApiError from '../../helpers/exceptions/api-errors';
import mongoose from 'mongoose';
import { IUser } from './types';
import User from './models/user';
import bcrypt from 'bcrypt';
import { uuid } from 'uuidv4';

export type UserServiceType = typeof userService;

const userService = {
  async registration(userData: IUser): Promise<IUser | null> {
    const { email, password } = userData;
    const candidate: IUser = await User.findOne({ email });

    if (candidate) {
      throw ApiError.BadRequest('Email already exists');
    }
    const hashPassword = await bcrypt.hash(password, 2);
    const activationLink = uuid();

    try {
      const createdUser: IUser = await User.create({
        email,
        password: hashPassword,
        activationLink
      });
      return createdUser;
      // throw ApiError.BadRequest('some string describe error');
    } catch (e) {
      console.log(e);
    }
  }
};

// export default new HouseService();
export default userService;
