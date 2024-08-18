import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeLoginService } from './home-login.service';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { routs } from './home-login.route';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";




@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    RouterModule.forChild(routs),
    FormsModule,
    HeaderComponent,
    FooterComponent
],
  exports: [
    RouterModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    HomeLoginService
  ]
})
export class HomeLoginModule { }
