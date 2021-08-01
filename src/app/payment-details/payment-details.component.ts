import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from './../shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [],
})
export class PaymentDetailsComponent implements OnInit {
  constructor(
    public svc: PaymentDetailService,
    private toastrSvc: ToastrService
  ) {}

  ngOnInit(): void {
    this.svc.refreshList();
  }
  populatedForm(item: PaymentDetail) {
    // Object.assign({},item) -> copy & return the value of item
    // In order to make formData not bind to item
    this.svc.formData = Object.assign({}, item);
    console.warn('formData: ', this.svc.formData);
  }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this recodr?')) {
      this.svc.deletePaymentDetail(id).subscribe(
        (res) => {
          console.log(res);
          this.svc.refreshList();
          this.toastrSvc.error(
            'data deleted successfully',
            'PaymentDetail Register'
          );
        },
        (err) => console.log(err)
      );
    }
  }
}
