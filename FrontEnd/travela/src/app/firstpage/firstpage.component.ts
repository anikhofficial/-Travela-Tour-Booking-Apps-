import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { AboutComponent } from "../about/about.component";
import { ServicesComponent } from "../services/services.component";
import { DestinationComponent } from "../destination/destination.component";
import { ExploreTourComponent } from "../explore-tour/explore-tour.component";
import { PackagesComponent } from "../packages/packages.component";
import { GalleryComponent } from "../gallery/gallery.component";
import { GuideComponent } from "../guide/guide.component";
import { SubscribeComponent } from "../subscribe/subscribe.component";
import { TestimonialComponent } from "../testimonial/testimonial.component";
import { BlogComponent } from "../blog/blog.component";
import { BookingComponent } from "../booking/booking.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-firstpage',
    standalone: true,
    templateUrl: './firstpage.component.html',
    styleUrl: './firstpage.component.scss',
    imports: [RouterModule,HeroComponent, AboutComponent, ServicesComponent, DestinationComponent, ExploreTourComponent, PackagesComponent, GalleryComponent, GuideComponent, SubscribeComponent, TestimonialComponent, BlogComponent, BookingComponent]
})
export class FirstpageComponent {

}
