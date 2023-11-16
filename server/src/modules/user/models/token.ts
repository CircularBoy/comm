import { model, Schema } from 'mongoose';
import { ITokenModel } from '../types';

const TokenSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  refreshToken: { type: String, required: true }
});

export default model<ITokenModel>('TokenModel', TokenSchema);
