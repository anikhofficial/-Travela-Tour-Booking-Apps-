import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
togglePaymentMenu() {
throw new Error('Method not implemented.');
}
paymentMenuOpen: any;
userDetailsMenuOpen: boolean = false;


  ngOnInit(): void {
  }
  transportMenuOpen: boolean = false;

  toggleTransportMenu() {
    this.transportMenuOpen = !this.transportMenuOpen;
  }
  tourMenuOpen: boolean = false;

  toggleTourMenu() {
    this.tourMenuOpen = !this.tourMenuOpen;
  }
  locationMenuOpen: boolean = false;

  toggleLocationMenu() {
    this.locationMenuOpen = !this.locationMenuOpen;
  }
  itineraryMenuOpen: boolean = false;

  toggleItineraryMenu() {
    this.itineraryMenuOpen = !this.itineraryMenuOpen;
  }
  toggleUserDetailsMenu() {
    this.userDetailsMenuOpen = !this.userDetailsMenuOpen;
  }

  bookingManagementMenuOpen = false;

  toggleBookingManagementMenu() {
    this.bookingManagementMenuOpen = !this.bookingManagementMenuOpen;
  }

  
}
