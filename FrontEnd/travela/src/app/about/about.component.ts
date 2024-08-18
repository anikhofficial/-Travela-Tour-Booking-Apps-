import { Component } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    imports: [RouterModule, FooterComponent, HeaderComponent]
})
export class AboutComponent {

}
