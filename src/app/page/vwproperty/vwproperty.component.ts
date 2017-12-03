import { Component, OnInit, Input } from '@angular/core';
import { VwpropertyService } from './../../services/vwproperty.service';


@Component({
  selector: 'app-vwproperty',
  templateUrl: './vwproperty.component.html',
  styleUrls: ['./vwproperty.component.css']
})
export class VwpropertyComponent implements OnInit {
  @Input() idInstance: any;
  propertys: any[];

  constructor(private service: VwpropertyService) { }

  ngOnInit() {
    console.log('this.idInstance = ' + JSON.stringify(this.idInstance));
    this.service.getByQueryParam({ 'idinstance': this.idInstance.id, 'idobject': this.idInstance.idobject.id})
      .subscribe(propertys => {
        this.propertys = propertys;
      });
  }

  updateProperty() {

  }

  isEqual(a, b) {
    return a === b ? true : false;
  }

}
