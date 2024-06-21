import authService from './services/auth-service';
import { NextFunction, Request, Response } from 'express';
import { RegistrationResponse } from '../../../../shared/types/user-types';
// import Registration from './validators/registration';

export type UserControllerType = typeof userController;

const userController = {
  async registration(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      // sample of validation
      // const result: Result<ValidationError> = validationResult(req);
      // if (!result.isEmpty()) {
      // return next(ApiError.BadRequest('Registration error', result.array()));
      // return null;
      // }
      const userData = await authService.registration(req.body);

      //add domain on production
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 1000 * 60 * 30,
        httpOnly: true
      });
      const responseData: RegistrationResponse = {
        email: userData.email,
        id: userData.id,
        accessToken: userData.accessToken
      };
      res.status(200).json(responseData);
    } catch (e) {
      // res.status(409).json('email  already registered');
      next(e);
    }
  },

  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userData = await authService.login(req.body);
      //add domain on production
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 1000 * 60 * 30,
        httpOnly: true
      });

      res.status(200).json(userData);
    } catch (e) {
      next(e);
    }
  },

  async logout(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { refreshToken } = req.cookies;

      const user = await authService.logout(refreshToken);
      //add domain on production
      res.clearCookie('refreshToken');
      res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  },

  async refresh(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { refreshToken } = req.cookies;
      const userData = await authService.refresh(refreshToken);
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 1000 * 60 * 30,
        httpOnly: true
      });
      res.status(200).json({ userData });
    } catch (e) {
      next(e);
    }
  },

  async getUsers(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const users = await authService.getUsers();
      res.status(200).json({ users });
    } catch (e) {
      next(e);
    }
  },

  async activationAccount(req: Request, res: Response, next: NextFunction) {
    try {
      const { activationLink } = req.params;
      const user = await authService.activationAccount(activationLink);
      console.log('controller', user);
      res.json({ user });
    } catch (e) {
      next(e);
    }
  }
};

// export default new HouseController();
export default userController;
