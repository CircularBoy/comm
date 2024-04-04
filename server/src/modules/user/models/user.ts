import { model, Schema } from 'mongoose';
import { IUserModel } from '../types';

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isActivate: { type: Boolean, default: false },
  activationLink: { type: String }
});

export default model<IUserModel>('user', UserSchema);
