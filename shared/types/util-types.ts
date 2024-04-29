export interface IUtil {
  name: string;
  tag: 'electricity' | 'gas' | 'transportGas';
  default: boolean;
  plans: [
    {
      dateStart: string;
      isStaticAmount?: boolean;
      priceRange: [
        {
          price: number;
          readingsPoint: [number, number] | []; // in some services like electric we need range
        }
      ];
    }
  ];
}
