import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [],
})
export class PaymentDetailFormComponent implements OnInit {
  constructor(
    public svc: PaymentDetailService,
    private toastrSvc: ToastrService
  ) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    if (this.svc.formData.paymentDetailId == 0) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }
  insertRecord(form: NgForm) {
    this.svc.postPaymentDetail().subscribe(
      (res) => {
        console.log(res);
        this.resetForm(form);
        this.svc.refreshList();
        this.toastrSvc.success(
          'Data submitted successfully',
          'PaymentDetail Register'
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }
  updateRecord(form: NgForm) {
    this.svc.updatePaymentDetail().subscribe(
      (res) => {
        console.log(res);
        this.resetForm(form);
        this.svc.refreshList();
        this.toastrSvc.info(
          'Data updated successfully',
          'PaymentDetail Updater'
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.svc.formData = new PaymentDetail();
  }
}
