import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ScheduleService } from '../schedule.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-schedule',
  templateUrl: './new-schedule.component.html',
  styleUrl: './new-schedule.component.scss'
})
export class NewScheduleComponent implements OnInit {
  newScheduleForm: FormGroup;

  constructor(private fb: FormBuilder,
    private scheduleService: ScheduleService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { 
    this.newScheduleForm = this.fb.group({
      id: ['', Validators.required],
      activity: ['', Validators.required],
      activityDate: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.scheduleService.getAllSchedules();
   
  }

  onSubmit(): void {
    if (this.newScheduleForm.valid) {
    this.scheduleService.addSchedule(this.newScheduleForm.value).subscribe(() => {
      this.snackBar.open('New schedule data added successful', 'Close', {
        duration: 3000
      });
      this.router.navigate(['/dashboard/schedule-list']);
    });
    }
  }
}