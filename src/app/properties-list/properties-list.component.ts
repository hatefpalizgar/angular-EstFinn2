import {Component, OnInit} from '@angular/core';
import {PropertiesService} from "../properties.service";

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.css']
})
export class PropertiesListComponent implements OnInit {

  props = [];

  constructor(private propertiesService:PropertiesService) {
  }

  ngOnInit(): void {
    this.props = this.propertiesService.getProperties();
  }

  handleClick(args: any){
    console.log(args);
  }
}
