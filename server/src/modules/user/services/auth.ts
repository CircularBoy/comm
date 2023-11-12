import ApiError from '../../../helpers/exceptions/api-errors';
import { IToken, IUser, IUserModel } from '../types';
import User from '../models/user';
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
    const candidate: IUser = await User.findOne({ email });

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

    const createdUser: IUserModel = await User.create({
      email,
      password: hashPassword,
      activationLink
    });

    const userDto: UserDto = new UserDto(createdUser);
    const tokens: IToken = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      ...userDto
    };
  },

  async activationAccount(link: string) {
    const user: IUserModel = await User.findOne({ activationLink: link });
    user.isActivate = true;
    await user.save();
    return user;
  }
};

export default userService;
