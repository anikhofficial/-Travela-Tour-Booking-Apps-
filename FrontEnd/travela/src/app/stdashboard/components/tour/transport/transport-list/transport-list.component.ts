import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TransportService } from '../transport.service';
import { Response } from '../Response';

@Component({
  selector: 'app-transport-list',
  templateUrl: './transport-list.component.html',
  styleUrl: './transport-list.component.scss'
})
export class TransportListComponent implements OnInit {
  transports: any = [];

  constructor(private transportService: TransportService) { }

  ngOnInit() {
    this.getAllTransports();
    
  }
getAllTransports(){
  this.transportService.getAllTransports().subscribe((data:Response<any>) => {
    console.log(data);
    this.transports = data;
  })
}
getAllTransportsById(id: number) {
  this.transportService.getAllTransportsById(id).subscribe((data:Response<any>) => {
    console.log(data);
    this.transports = data;
  })
}
deleteTransport(id: number) {
  this.transportService.deleteTransport(id).subscribe((data:Response<any>) => {
    console.log(data);
    this.transports = data;
  })
}
  
}