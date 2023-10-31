import { model, Schema } from 'mongoose';
import { IUserModel } from '../types';

const TokenSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  refresh: { type: String, required: true }
});

export default model<IUserModel>('Token', TokenSchema);
