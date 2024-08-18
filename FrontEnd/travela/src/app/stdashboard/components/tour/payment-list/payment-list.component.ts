import { Component, OnInit } from '@angular/core';
import { PaymentListService } from './payment-list.service';
import { Response } from '../../../../model/response.model';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrl: './payment-list.component.scss'
})
export class PaymentListComponent implements OnInit {
payments: any = [];
  constructor(private paymentlistService: PaymentListService) { }
  ngOnInit(): void {
    this.getAllPayments();
  }
  getAllPayments(){
    this.paymentlistService.getAllPayments().subscribe((data:Response<any>) => {
      console.log(data);
      this.payments = data;
    })
  }
}
