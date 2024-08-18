import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { HeroComponent } from "../hero/hero.component";
import { AboutComponent } from "../about/about.component";
import { ServicesComponent } from "../services/services.component";
import { DestinationComponent } from "../destination/destination.component";
import { PackagesComponent } from "../packages/packages.component";
import { ExploreTourComponent } from "../explore-tour/explore-tour.component";
import { GalleryComponent } from "../gallery/gallery.component";
import { BookingComponent } from "../booking/booking.component";
import { GuideComponent } from "../guide/guide.component";
import { BlogComponent } from "../blog/blog.component";
import { TestimonialComponent } from "../testimonial/testimonial.component";
import { SubscribeComponent } from "../subscribe/subscribe.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [RouterModule, RouterLink, HeaderComponent, HeroComponent, AboutComponent, ServicesComponent, DestinationComponent, PackagesComponent, ExploreTourComponent, GalleryComponent, BookingComponent, GuideComponent, BlogComponent, TestimonialComponent, SubscribeComponent, FooterComponent,CommonModule]
})
export class HomeComponent {

}
