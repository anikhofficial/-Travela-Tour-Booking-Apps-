import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeLoginService } from '../home-login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private homeloginService: HomeLoginService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {
    this.signupForm = this.formBuilder.group({
      name: [''],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.homeloginService.signup(this.signupForm.value).subscribe(() => {
        this.snackbar.open('Signup successful! Please login.', 'Close', {
          duration: 3000
        });
        this.router.navigate(['/homelogin/login']);
      });
    }
  }

}
