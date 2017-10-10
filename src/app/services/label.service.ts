import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class LabelService extends DataService {
    constructor(http: Http) {
        super('http://localhost:8080/HseWebService/wsrv/label', http);
    }

}
