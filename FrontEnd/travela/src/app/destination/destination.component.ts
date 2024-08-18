import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-destination',
    standalone: true,
    templateUrl: './destination.component.html',
    styleUrl: './destination.component.scss',
    imports: [RouterModule, HeaderComponent, FooterComponent]
})
export class DestinationComponent {

}
