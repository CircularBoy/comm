import ApiError from '../../../helpers/exceptions/api-errors';
import { IToken, IUser, IUserModel } from '../types';
import UserModel from '../models/user';
import bcrypt from 'bcrypt';
import { uuid } from 'uuidv4';
import UserDto from '../dtos/safe-user';
import tokenService from './token-service';
import MailService from '../../../services/mail-service';

export type UserServiceType = typeof userService;

type RegistrationUserType = IToken & UserDto;

const userService = {
  async registration(userData: IUser): Promise<RegistrationUserType | null> {
    const { email, password } = userData;
    const candidate: IUser = await UserModel.findOne({ email });

    if (candidate) {
      throw ApiError.BadRequest('Email already exists');
    }
    const hashPassword = await bcrypt.hash(password, 2);
    const activationLink = uuid();

    try {
      const mail = MailService.sendMail(email, activationLink);
      console.log({ mail });
    } catch (e) {
      console.log({ e });
      throw new Error(e);
    }

    const createdUser: IUserModel = await UserModel.create({
      email,
      password: hashPassword,
      activationLink
    });

    const userDto: UserDto = new UserDto(createdUser);
    const tokens: IToken = tokenService.generateToken({
      ...(userDto as UserDto)
    });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      ...userDto
    };
  },

  async login(userData: IUser): Promise<RegistrationUserType | null> {
    const { email, password } = userData;
    const user: IUserModel = await UserModel.findOne({ email });

    if (!user) {
      throw ApiError.BadRequest('User with this email does not exist');
    }

    const isPassEqual = await bcrypt.compare(password, user.password);

    if (!isPassEqual) {
      throw ApiError.BadRequest('User with this password does not exist');
    }

    const userDto: UserDto = new UserDto(user);
    const tokens: IToken = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      ...userDto
    };
  },

  async activationAccount(link: string) {
    const user: IUserModel = await UserModel.findOne({ activationLink: link });
    user.isActivate = true;
    await user.save();
    return user;
  },

  async refresh(refreshToken: string) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }

    const userData = await tokenService.validateRefreshToken(refreshToken);
    const checkTokenInDb = await tokenService.findTokenInDb(refreshToken);

    if (!userData || !checkTokenInDb) {
      throw ApiError.UnauthorizedError();
    }

    const user: IUserModel = await UserModel.findById(userData.id);
    const userDto: UserDto = new UserDto(user);
    const tokens: IToken = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      ...userDto
    };
  },

  async logout(refreshToken: string) {
    const userData = await tokenService.clearToken(refreshToken);
    return userData;
  },

  async getUsers() {
    const users = await UserModel.find();
    return users;
  }
};

export default userService;
