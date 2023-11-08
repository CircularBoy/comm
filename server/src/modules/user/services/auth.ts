import ApiError from '../../../helpers/exceptions/api-errors';
import { IToken, IUser, IUserModel } from '../types';
import User from '../models/user';
import bcrypt from 'bcrypt';
import { uuid } from 'uuidv4';
import UserDto from '../dtos/safe-user';
import tokenService from './token-service';
import nodemailer from 'nodemailer';

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

    const createdUser: IUserModel = await User.create({
      email,
      password: hashPassword,
      activationLink
    });

    const userDto = new UserDto(createdUser);
    const tokens: IToken = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    const mail = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'yuri.kruhovyi@gmail.com',
        pass: 'eiim dsve anhx lqhl'
      }
    });
    const test = mail.sendMail({
      from: 'amazon123@gmail.com',
      to: 'annadovgayaa@gmail.com',
      subject: 'kek',
      text: '',
      html: '' + '<div><h1>hi</h1></div>'
    });
    console.log({ test });
    return {
      ...tokens,
      ...userDto
    };
  }
};

// export default new HouseService();
export default userService;
