import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { BookingService } from './booking.service';
import { Response, ResponseStatus } from '../model/response.model';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-booking',
    standalone: true,
    templateUrl: './booking.component.html',
    styleUrl: './booking.component.scss',
    imports: [RouterModule, HeaderComponent, FooterComponent,FormsModule,CommonModule,HttpClientModule,ReactiveFormsModule ],
    providers: [BookingService],
})
export class BookingComponent {

    tours: any = [];
    bookingForm: FormGroup;
    constructor(
      private bookingService: BookingService,
      private fb: FormBuilder,
      private router: Router,
    private matSnack: MatSnackBar) {

      this.bookingForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        bookingDate: ['', Validators.required],
        tourPackage: ['', Validators.required],
        price: [''],
        persons: [''],
        specialRequest: ['']
      });
     }
    ngOnInit() {
        this.getAllTours();
      }
      getAllTours(){
        this.bookingService.getAllTours().subscribe((data:Response<any>)=> {
          console.log(data);
          this.tours = data;
        })
      }

      createBooking(booking: any) {
        this.bookingService.saveBooking(booking).subscribe((res) => {
          
        });
      }
      getAllBookings(): Observable<any> {
        return this.bookingService.getAllBookings();
      }

      getBookingById(id: number): Observable<any> {
        return this.bookingService.getBookingById(id);
      }

      updateBooking(booking: any): Observable<any> {
        return this.bookingService.updateBooking(booking);
      }
      

      onSubmit() {
        if (this.bookingForm.valid) {
          this.bookingService.saveBooking(this.bookingForm.value).subscribe((res) => {
            this.matSnack.open('Booking data added successful', 'Close', {
              duration: 3000
            });
            sessionStorage.setItem('booking', JSON.stringify(res));
            this.router.navigate(['/payment']);
          })
        }
      }
      
   
}
