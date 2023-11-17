import ApiError from '../exceptions/api-errors';
import { Request, Response, NextFunction } from 'express';
const i = 0;
export default function (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log('error handler' + err);
  if (err instanceof ApiError) {
    return res
      .status(err.status)
      .json({ message: err.message, errors: err.errors });
  }
  return res.status(500).json({ message: 'Unknown error' });
}
