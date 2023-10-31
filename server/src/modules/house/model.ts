import { model, Schema } from 'mongoose';
import { HouseType } from './types';
import { UtilSchema } from '../util/model';

const House = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  pays: [{ type: Schema.Types.ObjectId, ref: 'Pay' }],
  // customUtil: [{ type: Schema.Types.ObjectId, ref: 'Util' }]
  utils: [UtilSchema]
});

export default model<HouseType>('house', House);
