import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HeroComponent } from "./hero/hero.component";
import { ServicesComponent } from "./services/services.component";
import { FooterComponent } from "./footer/footer.component";
import { SubscribeComponent } from "./subscribe/subscribe.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";
import { AboutComponent } from "./about/about.component";
import { DestinationComponent } from "./destination/destination.component";
import { PackagesComponent } from "./packages/packages.component";
import { ExploreTourComponent } from "./explore-tour/explore-tour.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { BookingComponent } from "./booking/booking.component";
import { GuideComponent } from "./guide/guide.component";
import { BlogComponent } from "./blog/blog.component";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    HttpClientModule,
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    FooterComponent,
    SubscribeComponent,
    TestimonialComponent,
    AboutComponent,
    DestinationComponent,
    PackagesComponent,
    ExploreTourComponent,
    GalleryComponent,
    BookingComponent,
    GuideComponent,
    BlogComponent,
  ],
})
export class AppComponent {
  title = 'travela';
}
