import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { Response } from '../Response';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrl: './location-list.component.scss'
})
export class LocationListComponent implements OnInit {
  locations: any = [];

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.getAllLocations();
  }
getAllLocations(){
  this.locationService.getAllLocations().subscribe((data:Response<any> )=> {
    console.log(data);
    this.locations=data;
  })
}
getAllLocationsById(id: number) {
  this.locationService.getAllLocationsById(id).subscribe((data: Response<any>) => {
    console.log(data);
    this.locations = data;
  })
}

deleteLocation(id: number) {
  this.locationService.deleteLocation(id).subscribe((data) => {
    console.log(data);
    this.locations = data;
  })
}

}