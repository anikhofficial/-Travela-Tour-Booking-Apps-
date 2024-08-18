import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-payment-done',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './payment-done.component.html',
  styleUrl: './payment-done.component.scss'
})
export class PaymentDoneComponent {
goToHome() {
throw new Error('Method not implemented.');
}

}
