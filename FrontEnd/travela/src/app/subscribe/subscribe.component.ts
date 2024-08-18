import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-subscribe',
    standalone: true,
    templateUrl: './subscribe.component.html',
    styleUrl: './subscribe.component.scss',
    imports: [RouterModule, HeaderComponent, FooterComponent]
})
export class SubscribeComponent {

}
