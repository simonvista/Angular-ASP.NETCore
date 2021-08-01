export class PaymentDetail {
  // canel case will be converted to Pascal to DB created by .NET 5
  paymentDetailId: number = 0;
  cardOwnerName: string = '';
  cardNumber: string = '';
  cardExpirationDate: string = '';
  cardSecurityCode: string = '';

  /* constructor(){
      this.paymentDetailId=0;
      ...
  } */
}
