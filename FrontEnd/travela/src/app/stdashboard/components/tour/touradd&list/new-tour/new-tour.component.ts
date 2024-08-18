import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TouraddService } from '../touradd.service';

@Component({
  selector: 'app-new-tour',
  templateUrl: './new-tour.component.html',
  styleUrls: ['./new-tour.component.scss']
})
export class NewTourComponent implements OnInit {
  
  newTourForm: FormGroup;

  photoError: boolean = false;
  photoPreview: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder,
    private tourAddService: TouraddService,
    private snackBar: MatSnackBar,
    private router: Router) {
    
    this.newTourForm = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      days: ['', Validators.required],
    });
   }

  ngOnInit(){
    this.tourAddService.getAllTours();
    
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.photoPreview = reader.result;
        console.log(this.photoPreview);
      };
      reader.readAsDataURL(file);
      this.newTourForm.patchValue({
        photo: file
      });
      this.photoError = false;
    }
  }

  onSubmit() {
    if (this.newTourForm.invalid) {
      if (!this.newTourForm.get('photo')?.value) {
        this.photoError = true;
      }
      return;
    }
      if (this.newTourForm.valid) {
        this.tourAddService.signup(this.newTourForm.value).subscribe(() => {
          this.snackBar.open('New tour data added successful', 'Close', {
            duration: 3000
          });
          this.router.navigate(['/dashboard/tour-list']);
        });
      } else {
        console.log(this.newTourForm.value);
      }
    }
  }