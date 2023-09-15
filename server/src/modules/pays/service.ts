import Pay from './model';
import House from '../houses/model';
// import UtilsService from '../helper/services';
import { IPaySchema, IPayType } from './types';

// const {Pay, houses} = model
export type PayServiceType = typeof PayService;
const PayService = {
  async createPay(payData: IPayType): Promise<IPayType | null> {
    try {
      // const preparedData = this.preparePay(payData)
      const createdPay: IPaySchema | null = await Pay.create(payData);

      House.findOne({ name: createdPay.addressName }, (err, TargetHouse) => {
        if (TargetHouse) {
          TargetHouse.pays.push(createdPay._id);
          TargetHouse.save();
        }
      });
      return createdPay;
    } catch (e) {
      console.log(e);
    }
  },

  async getPays(options) {
    const { addressName } = options || {};
    const query = { ...(options.addressName ? { addressName } : {}) };

    const pays = await Pay.find(query);
    return pays;
  }

  // preparePay(payData) {
  //   const { lastStat, newStat, serviceId, planValue } = payData;
  //   const preparedData = { ...payData };
  //   preparedData.diffStat = newStat - lastStat;
  //   preparedData.createdDate = Date.now();
  //
  //   //tuc
  //   // if(isPlanNew) {
  //   // 	ServiceService.addPlan({serviceId, data: {value: planValue, dateStart: Date.now()}})
  //   // }
  //
  //   preparedData.toPay = this.calcToPay(preparedData.diffStat, planValue);
  // }
  //
  // calcToPay(diffStat, planValue) {}
};

export default PayService;
