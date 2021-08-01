import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [],
})
export class PaymentDetailsComponent implements OnInit {
  constructor(public svc: PaymentDetailService) {}

  ngOnInit(): void {
    this.svc.refreshList();
  }
}
