import { model, Schema } from 'mongoose';
import { IHouseModel, IHouseWithoutId } from "./types";
import { UtilSchema } from '../util/model';

const House = new Schema<IHouseWithoutId>({
  name: { type: String, required: true },
  address: { type: String, required: true },
  pays: [{ type: Schema.Types.ObjectId, ref: 'Pay' }],
  utils: [UtilSchema]
});

export default model<IHouseModel>('house', House);
