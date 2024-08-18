import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { HttpClientModule, HttpContext } from '@angular/common/http';
import { Response } from './Response';
import { PackageService } from './package.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-packages',
    standalone: true,
    templateUrl: './packages.component.html',
    styleUrl: './packages.component.scss',
    imports: [RouterModule, HeaderComponent, FooterComponent,HttpClientModule,CommonModule],
    providers: [PackageService],
})
export class PackagesComponent implements OnInit {
    tours: any = [];

    constructor(private packageService: PackageService) { }

    ngOnInit() {
        this.getAllTours();
      }
      getAllTours(){
        this.packageService.getAllTours().subscribe((data:Response<any>)=> {
          console.log(data);
          this.tours = data;
        })
      }

}
