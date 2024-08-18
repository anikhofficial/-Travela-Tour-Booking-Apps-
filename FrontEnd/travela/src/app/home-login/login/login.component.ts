import { Component } from '@angular/core';
import { Response, ResponseStatus } from '../../model/response.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeLoginService } from '../home-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent { 
  
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private homeloginService: HomeLoginService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.homeloginService.login(this.loginForm.value).subscribe((resp: Response<any>) => {
        console.log(resp);
        console.log(resp.status == ResponseStatus.SUCCESS);
        if (resp.status == ResponseStatus.SUCCESS) {
          localStorage.setItem('token',  JSON.stringify(resp.data));
          sessionStorage.setItem('user', JSON.stringify(resp.data));
          this.router.navigate(['/dashboard']);
        }
      });
    }

    // sessionStorage.setItem('rs-token', "asdfghjkl");
    // this.router.navigate(["/dashboard"]);
  }
  }
 