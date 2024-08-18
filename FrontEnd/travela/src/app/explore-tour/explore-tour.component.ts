import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-explore-tour',
    standalone: true,
    templateUrl: './explore-tour.component.html',
    styleUrl: './explore-tour.component.scss',
    imports: [RouterModule, HeaderComponent, FooterComponent]
})
export class ExploreTourComponent {

}
