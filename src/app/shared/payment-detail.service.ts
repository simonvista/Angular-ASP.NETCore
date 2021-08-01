import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PaymentDetailService {
  constructor(private hc: HttpClient) {}
  readonly baseURL = 'https://localhost:44302/api/PaymentDetail';
  formData: PaymentDetail = new PaymentDetail();
  list: PaymentDetail[];

  postPaymentDetail() {
    // formData is obtained by 2-way binding ([(ngModel)])
    console.warn('formData', this.formData);
    return this.hc.post(this.baseURL, this.formData);
  }
  refreshList() {
    this.hc
      .get(this.baseURL)
      .toPromise()
      .then((res) => {
        this.list = res as PaymentDetail[];
      });
  }
}
