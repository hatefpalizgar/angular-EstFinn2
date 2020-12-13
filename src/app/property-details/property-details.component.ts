import { Component, OnInit } from '@angular/core';
import {PropertiesService} from "../properties.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  prop:any;
  constructor(
    private propertyService: PropertiesService,
    private route: ActivatedRoute) {  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.prop = this.propertyService.getPropertyById(id);
  }

}
