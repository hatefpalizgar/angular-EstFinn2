import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-property-thumbnail',
  templateUrl: './property-thumbnail.component.html',
  styleUrls: ['./property-thumbnail.component.css']
})
export class PropertyThumbnailComponent implements OnInit {

  @Input() inpProp:any;
  @Output() outpProp=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    this.outpProp.emit('foo');
  }
}
