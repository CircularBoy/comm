import { NextFunction, Request, Response } from 'express';
import ApiError from '../exceptions/api-errors';
import tokenService from '../../modules/user/services/token-service';
import userController from '../../modules/user/controller';
//
// type AuthorizedRequest = Express.Request & { authorization: string };
// interface AuthRequest extends Request {
//   authorization: string
// }
export default async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authorizationHeader = req.headers.authorization;
    const accessToken =
      authorizationHeader && authorizationHeader.replace('Bearer ', '');

    if (!authorizationHeader || !accessToken) {
      return next(ApiError.UnauthorizedError());
    }

    const userData = await tokenService.validateAccessToken(accessToken);

    if (!userData) {
      return next(ApiError.UnauthorizedError());
    }

    next();
  } catch (e) {
    return next(ApiError.UnauthorizedError(e));
  }
}
