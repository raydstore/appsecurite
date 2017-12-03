import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { DataService } from './data.service';

@Injectable()
export class VwpropertyService extends DataService {
  constructor(http: Http) {
    super('http://10.1.0.150:8080/HseWebService/wsrv/vwproperty', http);
  }

}
