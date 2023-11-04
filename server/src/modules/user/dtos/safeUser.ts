import { IUserModel } from '../types';

//maybe create type dto here or describe object in services authtoken

export default class UserDto {
  email: string;
  id: string;
  isActivate: boolean;

  constructor(model: IUserModel) {
    this.email = model.email;
    this.id = model._id;
    this.isActivate = model.isActivate;
  }
}
