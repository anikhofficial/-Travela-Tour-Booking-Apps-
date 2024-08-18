import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocationService } from '../location.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.component.html',
  styleUrl: './new-location.component.scss'
})
export class NewLocationComponent implements OnInit {
  newLocationForm: FormGroup;

  constructor(private fb: FormBuilder, private locationService: LocationService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {

    this.newLocationForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    
  }

  onSubmit() {
    if (this.newLocationForm.valid) {
      this.locationService.addLocation(this.newLocationForm.value).subscribe(() => {
        this.snackBar.open('New location data added successful', 'Close', {
          duration: 3000
        });
        this.router.navigate(['/dashboard/location-list']);
      });
    }
  }
}