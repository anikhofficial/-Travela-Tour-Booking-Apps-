import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {
  schedules: any = [];

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    
    this.getAllSchedules();
  }
getAllSchedules(){
  this.scheduleService.getAllSchedules().subscribe((data) => {
    console.log(data);
    this.schedules = data;
  })
}
getAllSchedulesById(id: number) {
  this.scheduleService.getAllSchedulesById(id).subscribe((data) => {
    console.log(data);
    this.schedules = data;
  })
}
deleteSchedule(id: number) {
  this.scheduleService.deleteSchedule(id).subscribe((data) => {
    console.log(data);
    this.schedules = data;
  })
}

}

