import { model, Schema } from 'mongoose';
import { IHouseModel } from "./types";
import { UtilSchema } from '../util/model';
import { IHouse } from "../../../../shared/types/house-types";

const House = new Schema<IHouse>({
  name: { type: String, required: true },
  address: { type: String, required: true },
  pays: [{ type: Schema.Types.ObjectId, ref: 'Pay' }],
  utils: [UtilSchema]
});

export default model<IHouseModel>('house', House);
