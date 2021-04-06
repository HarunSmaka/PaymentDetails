import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http: HttpClient) { }

  readonly baseURL = "https://localhost:44348/api/PaymentDetail";
  formData: PaymentDetail = new PaymentDetail();
  list: PaymentDetail[];

  postPaymentDetail() {
    return this.http.post(this.baseURL, this.formData)
  }

  putPaymentDetail() {
    let te=this.formData.paymentDetailId;
    console.log(te + ' <- ID');
    
    console.log(this.formData);
    console.log(this.formData.paymentDetailId);

    console.log("test: " + `${this.baseURL}/${this.formData.paymentDetailId}`);
    
    
    return this.http.put(`${this.baseURL}/${this.formData.paymentDetailId}`, this.formData);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as PaymentDetail[]);    
  }
}
