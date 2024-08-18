import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { DestinationComponent } from './destination/destination.component';
import { ExploreTourComponent } from './explore-tour/explore-tour.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GuideComponent } from './guide/guide.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { PackagesComponent } from './packages/packages.component';
import { ServicesComponent } from './services/services.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentDoneComponent } from './payment-done/payment-done.component';



export const routes: Routes = [
    {
        path: '', component: HomeComponent
    }
    ,
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'blog', component: BlogComponent
    },
    {

        path: 'booking', component: BookingComponent
    },
    {
        path: 'destination', component: DestinationComponent
    },
    {
        path: 'contact', component: ContactComponent
    },
    {
        path: 'explore-tour', component: ExploreTourComponent
    },

    {
        path: 'gallery', component: GalleryComponent
    },
    {
        path: 'guide', component: GuideComponent
    },

    {
        path: 'header', component: HeaderComponent
    },
    {
        path: 'hero', component: HeroComponent
    },

    {
        path: 'pack', component: PackagesComponent
    },
    {
        path: 'payment', component: PaymentComponent
    },
    {
        path:'payment-done',component:PaymentDoneComponent
    },
    {
        path: 'services', component: ServicesComponent
    },

    {
        path: 'subscribe', component: SubscribeComponent
    },
    {
        path: 'testimonial', component: TestimonialComponent
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./stdashboard/stdashboard.module').then(m => m.StdashboardModule)
    },
    {
        path: 'homelogin', 
        loadChildren: () => import('./home-login/home-login.module').then(m => m.HomeLoginModule)
    },

];
