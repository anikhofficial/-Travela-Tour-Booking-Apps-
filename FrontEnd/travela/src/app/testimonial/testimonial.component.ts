import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";


@Component({
    selector: 'app-testimonial',
    standalone: true,
    templateUrl: './testimonial.component.html',
    styleUrl: './testimonial.component.scss',
    imports: [RouterModule, HeaderComponent, FooterComponent]
})
export class TestimonialComponent {

}
