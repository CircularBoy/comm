import { model, Schema } from 'mongoose';
import { IBlankTypeModel } from './types';

const BlankSchema = new Schema({
  name: { type: String, required: true }
});

export default model<IBlankTypeModel>('blank', BlankSchema);
