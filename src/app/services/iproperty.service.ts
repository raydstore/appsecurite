import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class IPropertyService extends DataService {
    constructor(http: Http) {
        super('http://10.1.0.150:8080/HseWebService/wsrv/iproperty', http);
    }

}
