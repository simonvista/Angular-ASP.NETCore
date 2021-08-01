import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaymentDetailService {
  constructor() {}
  // readonly baseURL = 'http://localhost:44302/api/PaymentDetail';
  formData: PaymentDetail = new PaymentDetail();
}
