import { IToken, ITokenModel } from '../types';
import * as jwt from 'jsonwebtoken';
import TokenModel from '../models/token';
// import dotenv from 'dotenv';
// dotenv.config();

export type UserServiceType = typeof userService;

const userService = {
  generateToken(payload: object): IToken | null {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: '1h'
    });

    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: '30m'
    });

    return {
      accessToken,
      refreshToken
    };
  },

  async saveToken(userId, refreshToken) {
    const tokenData: ITokenModel = await TokenModel.findOne({ userId });

    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }

    const token = await TokenModel.create({ userId, refreshToken });
    return token.save();
  }
};

// export default new HouseService();
export default userService;
