import { IToken, ITokenModel, IUser } from '../types';
import * as jwt from 'jsonwebtoken';
import TokenModel from '../models/token';
import UserDto from '../dtos/safe-user';
// import dotenv from 'dotenv';
// dotenv.config();

export type UserServiceType = typeof userService;
// interface CustomJwtPayload extends jwt.JwtPayload {
//   email: string;
//   id: string;
//   isActivate: boolean;
// }

const userService = {
  generateToken(payload: object): IToken | null {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: '1h'
    });

    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: '30d'
    });

    return {
      accessToken,
      refreshToken
    };
  },

  async saveToken(userId: string, refreshToken: string) {
    const tokenData: ITokenModel = await TokenModel.findOne({ userId });

    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }

    const token = await TokenModel.create({ userId, refreshToken });
    return token.save();
  },

  async validateAccessToken(token: string) {
    try {
      console.log('start validate');
      const userData = jwt.verify(
        token,
        process.env.JWT_ACCESS_SECRET
      ) as jwt.JwtPayload & UserDto;
      console.log({ userData });
      return userData;
    } catch (e) {
      console.log({ e });
      return null;
    }
  },

  async validateRefreshToken(token: string) {
    try {
      const userData = jwt.verify(
        token,
        process.env.JWT_REFRESH_SECRET
      ) as jwt.JwtPayload & UserDto;

      return userData;
    } catch (e) {
      return null;
    }
  },

  async findTokenInDb(refreshToken: string) {
    try {
      const token: ITokenModel = await TokenModel.findOne({ refreshToken });
      return token;
    } catch (e) {
      return null;
    }
  },

  async clearToken(refreshToken: string) {
    const token = await TokenModel.deleteOne({ refreshToken });
    return token;
  }
};

// export default new HouseService();
export default userService;
