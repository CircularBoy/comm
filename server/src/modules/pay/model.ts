import { model, Schema } from 'mongoose';
import { IPayModel } from './types';

const Pay = new Schema({
  utilId: { type: Schema.Types.ObjectId, ref: 'util', required: true },
  addressId: { type: Schema.Types.ObjectId, ref: 'house', required: true },
  month: { type: String, required: true },
  // addressName: { type: String, required: true },
  // createdData: {type: Date, required: true},
  lastStat: { type: Number },
  newStat: { type: Number },
  // diffStat: { type: Number },
  // planValue: [{
  // 	value: {type: Number, required: true},
  // 	fromStat: {type: Number, required: true}
  // }],
  // isPlanNew: {type: Boolean, required: true},
  toPay: { type: Number, required: true }
  // check: {type: Number},
  // payDiff: {type: Number},
  // paidDebt: {type: Number, required: true},
  // paidSum: {type: Number, required: true}
});

export default model<IPayModel>('pay', Pay);
