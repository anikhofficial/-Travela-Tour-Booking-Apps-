import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//import { SidenavComponent } from './sidenav/sidenav.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NewTourComponent } from './components/tour/touradd&list/new-tour/new-tour.component';
import { TourListComponent } from './components/tour/touradd&list/tour-list/tour-list.component';
import { NewLocationComponent } from './components/tour/location/new-location/new-location.component';
import { LocationListComponent } from './components/tour/location/location-list/location-list.component';
import { NewScheduleComponent } from './components/tour/schedule/new-schedule/new-schedule.component';
import { ScheduleListComponent } from './components/tour/schedule/schedule-list/schedule-list.component';
import { NewTransportComponent } from './components/tour/transport/new-transport/new-transport.component';
import { TransportListComponent } from './components/tour/transport/transport-list/transport-list.component';
import { TouraddService } from './components/tour/touradd&list/touradd.service';
import { LocationService } from './components/tour/location/location.service';
import { ScheduleService } from './components/tour/schedule/schedule.service';
import { TransportService } from './components/tour/transport/transport.service';
import { PaymentListComponent } from './components/tour/payment-list/payment-list.component';
import { PaymentListService } from './components/tour/payment-list/payment-list.service';
import { BookingDataComponent } from './components/tour/booking-data/booking-data.component';
import { BookingDataService } from './components/tour/booking-data/booking-data.service';
import { BookingService } from '../booking/booking.service';
import { AdminBookingManagementComponent } from './components/tour/booking-management/booking-management.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'new-tour', component: NewTourComponent
      },
      {
        path: 'tour-list', component: TourListComponent
      },
      {
        path: 'new-location', component: NewLocationComponent
      },
      {
        path: 'location-list', component: LocationListComponent
      },
      {
        path: 'new-schedule', component: NewScheduleComponent
      },
      {
        path: 'schedule-list', component: ScheduleListComponent
      },
      {
        path: 'new-transport', component: NewTransportComponent
      },
      {
        path: 'transport-list', component: TransportListComponent
      },
      {
        path: 'payment-list', component: PaymentListComponent
      },
      {
        path: 'booking-data', component: BookingDataComponent
      },
      {
        path: 'booking-mgt', component: AdminBookingManagementComponent
      }
    ]
  }
];


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    SidenavComponent,
    NewTourComponent,
    TourListComponent,
    NewLocationComponent,
    LocationListComponent,
    NewScheduleComponent,
    ScheduleListComponent,
    NewTransportComponent,
    TransportListComponent,
    PaymentListComponent,
    BookingDataComponent,
    AdminBookingManagementComponent
   
  ],
  imports: [
    CommonModule,
    MatTreeModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  

  ],
  providers: [provideHttpClient(withInterceptorsFromDi()),TouraddService,
    LocationService,
    ScheduleService,
    TransportService,
    PaymentListService,
    BookingDataService,
    BookingService],
  exports: [RouterModule]
})
export class StdashboardModule { }
