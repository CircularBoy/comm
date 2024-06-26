import { FieldValidationError } from 'express-validator';

export default class ApiError extends Error {
  status;
  errors;

  constructor(status: number, message: string, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static UnauthorizedError(e?: string) {
    console.log('apierror handler', e);
    return new ApiError(401, 'User un authorized');
  }

  static BadRequest(message: string, errors = [], status?: number) {
    return new ApiError(status || 400, message, errors);
  }
}
