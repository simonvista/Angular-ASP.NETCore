import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PaymentDetailService {
  constructor(private hc: HttpClient) {}
  readonly baseURL = 'http://localhost:44302/api/PaymentDetail';
  formData: PaymentDetail = new PaymentDetail();
  postPaymentDetail() {
    // formData is obtained by 2-way binding ([(ngModel)])
    return this.hc.post(this.baseURL, this.formData);
  }
}
