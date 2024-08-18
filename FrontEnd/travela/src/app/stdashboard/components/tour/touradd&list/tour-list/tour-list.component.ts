import { Component, OnInit } from '@angular/core';
import { TouraddService } from '../touradd.service';
import { Response } from '../Response';


@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.scss'
})
export class TourListComponent implements OnInit {
  tours: any= [];

  constructor(private tourAddService: TouraddService) { }

  ngOnInit() {
    this.getAllTours();
  
    
  }
  getAllTours(){
    this.tourAddService.getAllTours().subscribe((data:Response<any>)=> {
      console.log(data);
      this.tours = data;
    })
  }
getAllToursById(id: number) {
    this.tourAddService.getAllToursById(id).subscribe((data: Response<any>) => {
      console.log(data);
      this.tours = data;
    })
  }
 deleteTour(id: number) {
    this.tourAddService.deleteTour(id).subscribe((data) => {
      console.log(data);
      this.tours = data;
    })
  }
  
}

