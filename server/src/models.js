// import mongoose, {Schema} from "mongoose"
//
// // const Plans = new Schema({
// // 	dateStart: {type: String, required: true},
// // 	value: {type: Number, required: true},
// // });
//
// const Service = new Schema({
// 	name: {type: String, required: true},
// 	plans: [{
// 		dateStart: {type: String, required: true},
// 		planValue: [{
// 			value: {type: Number, required: true},
// 			fromStat: {type: Number, required: true}
// 		}]
// 	}],
// })
//
// const Pay = new Schema({
// 	serviceId: {type: Schema.Types.ObjectID, ref: 'Service' , required: true},
// 	month: {type: String, required: true},
// 	addressName: {type: String, required: true},
// 	createdData: {type: Date, required: true},
// 	lastStat: {type: Number},
// 	newStat: {type: Number},
// 	diffStat: {type: Number},
// 	// planValue: [{
// 	// 	value: {type: Number, required: true},
// 	// 	fromStat: {type: Number, required: true}
// 	// }],
// 	// isPlanNew: {type: Boolean, required: true},
// 	toPay: {type: Number, required: true},
// 	// check: {type: Number},
// 	// payDiff: {type: Number},
// 	// paidDebt: {type: Number, required: true},
// 	// paidSum: {type: Number, required: true}
// })
//
// //*info from front
// // serviceId
// // month
// // addressName
// // createdData
// // lastStat
// // newStat
// // check
// // paid sum
//
// //*statistic for  user
// // toPayByPlan
// // totally paid
// // check
// // paidDiffFromCheck from
// // paidDebt
//
//
//
// //new Model like eletricity or water where we will save plans
// //create   new schema bundler
// //add new plan array directly from pay form
//
// const houses = new Schema({
// 	name: {type: String, required: true},
// 	address: {type: String, required: true},
// 	pays: [{type: Schema.Types.ObjectID, ref: 'Pay'}]
// })
//
// function buildModels(models) {
// 	const obj = {}
// 	for(let name in models) {
// 		obj[name] = mongoose.model(name, models[name])
// 	}
// 	return obj
// }
//
// const models = {
// 	Pay, houses, Service
// }
//
// // const test = buildModels(models)
// // console.log(test);
//
// // export default mongoose.model('houses', houses)
// export default buildModels(models)
