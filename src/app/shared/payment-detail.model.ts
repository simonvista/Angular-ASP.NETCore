export class PaymentDetail {
  // canel case will be converted to Pascal to DB created by .NET 5
  paymentDetailId: number;
  cardOwnerName: string;
  cardNumber: string;
  cardExpirationDate: string;
  cardSecurityCode: string;
}
