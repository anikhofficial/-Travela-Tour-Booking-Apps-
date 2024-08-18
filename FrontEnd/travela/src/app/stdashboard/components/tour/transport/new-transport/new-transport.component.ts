import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransportService } from '../transport.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-transport',
  templateUrl: './new-transport.component.html',
  styleUrls: ['./new-transport.component.scss']
})
export class NewTransportComponent implements OnInit {
  newTransportForm: FormGroup;

  constructor(private fb: FormBuilder,
    private transportService: TransportService,
    private snackBar: MatSnackBar,
    private router: Router) {
    this.newTransportForm = this.fb.group({
      id: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.transportService.getAllTransports();
  }

  onSubmit(): void {
    if (this.newTransportForm.valid) {
      this.transportService.addTransport(this.newTransportForm.value).subscribe(() => {
        this.snackBar.open('New transport data added successful', 'Close', {
          duration: 3000
        });
        this.router.navigate(['/dashboard/transport-list']);
      });
    }
  }
}

