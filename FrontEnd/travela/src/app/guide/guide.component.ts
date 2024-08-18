import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-guide',
    standalone: true,
    templateUrl: './guide.component.html',
    styleUrl: './guide.component.scss',
    imports: [RouterModule, HeaderComponent, FooterComponent]
})
export class GuideComponent {

}
