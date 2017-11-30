import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from '../common/app-error';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {
    headers = new Headers();

    constructor(private url, private http: Http) {
    /*    this.headers.append('Access-Control-Allow-Origin', '*');
        this.headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        // this.headers.append('Access-Control-Allow-Credentials', 'true');
        this.headers.append('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, X-CSRF-TOKEN');
        // Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
// 'Content-Type, Accept');*/
        this.headers.append('Content-Type', 'application/json');
        // application/x-www-form-urlencoded'); // '
     }

    getAll() {
        return this.http.get(this.url)
            .map(response => response.json())
            .catch(this.handleError);
    }

    getItem(id) {
        return this.getAll()
        .map(items => items.find(item => item.id === id))
       /* return this.http.get(this.url + '/' + id)
            .map(response => response.json()) */
            .catch(this.handleError);
    }

    getByQueryParam(paramName, paramValue) {
        return this.http.get(this.url + '?' + paramName + '=' + paramValue)
            .map(response => response.json())
            .catch(this.handleError);
    }

    create(resource) {
        // for testing optimistic implementation
        // return Observable.throw(new AppError());
      //  this.headers.set('Content-Type', 'application/json');
    //   , { headers: this.headers }
        return this.http.post(this.url, JSON.stringify(resource), { headers: this.headers })
        .map(response => response.json())
          //  .catch(this.handleError);
    }

    update(resource) {
        // , { headers: this.headers }
        return this.http.put(this.url + '/' + resource.id, JSON.stringify(resource), { headers: this.headers })
            .map(response => response.json())
            .catch(this.handleError);
    }

    delete(id) {
        // for testing optimistic implementation
        // return Observable.throw(new AppError());
        /* this.headers.set('Content-Type', 'text/plain'); */
        // , { headers: this.headers }
        return this.http.delete(this.url + '/' + id, { headers: this.headers })
            .map(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error) {
        if (error.status === 400) {
            return Observable.throw(new BadInput(error.json()));
        }

        if (error.status === 404) {
            return Observable.throw(new NotFoundError());
        }

        return Observable.throw(new AppError(error));
    }
}
