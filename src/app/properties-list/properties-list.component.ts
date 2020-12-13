import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.css']
})
export class PropertiesListComponent implements OnInit {
  prop: any = {
    name: 'Barbara House',
    price: 90000,
    builtUpArea: '1440 sq. ft',
    carpetArea: '1440 sq. ft',
    configuration: '3 bedrooms, 3 bathrooms, others',
    facing: 'East',
    age: '3 years',
    type: 'Individual House',
    location: {
      address: '1 Park Avenue',
      city: 'New York',
      country: 'United States'
    }

  }

  constructor() {
  }

  ngOnInit(): void {
  }

  handleClick(args: any){
    console.log(args);
  }
}
