import { model, Schema } from 'mongoose';
import { IUtilType, IUtilModel } from './types';

export const UtilSchema = new Schema<IUtilType>({
  name: { type: String, required: true },
  plans: [
    {
      dateStart: { type: String, required: true },
      isStaticAmount: Boolean,
      priceRange: [
        {
          // price: { type: Number },
          // readingsPoint: { type: [Number], default: [] }
          price: { type: Number, required: true },
          readingsPoint: { type: [Number], required: true, default: [] }
        }
      ]
    }
  ]
});
/*
	We need create many different helper it may be apartment or some else similar paid what can repeat their self
	Than bind they to house id or in house model we will have array with id of each \unique helper
	Than in pay page we will have \select with all house and check box list with hide content for each \services
	But we have problem if some service change his price in only one house what he \bind but in another house what he has connect tha price was old
	So we need list of services what we will create with some preset. Some list of sample helper. And \than when we will create house or edit house
	we will see list of all sample helper except we already added to house list helper and list of helper already added to house helper list.
	And \than we can edit some helper already added to house`s helper, because they will be \save in House model

	So I decide add new model SampleUnit or some like it and holding our sample units and when we create house we get it array in select
	and then add unit what we need and after that we will save all unit array into the house

*/

export default model<IUtilModel>('util', UtilSchema);
