import Pay from './model';
import House from '../house/model';
// import UtilsService from '../helper/services';
import { IPayModel, IPay } from './types';

// const {Pay, house} = model
export type PayServiceType = typeof PayService;
const PayService = {
  async createPay(payData: IPay): Promise<IPayModel | null> {
    try {
      // const preparedData = this.preparePay(payData)
      const createdPay: IPayModel | null = await Pay.create(payData);

      House.findOne({ _id: createdPay.addressId }, (err, TargetHouse) => {
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
