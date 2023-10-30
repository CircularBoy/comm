import { model, Schema } from 'mongoose';
import { IUtilTypeModel } from './types';

const BlankSchema = new Schema({
  name: { type: String, required: true }
});

export default model<IUtilTypeModel>('blank', BlankSchema);
