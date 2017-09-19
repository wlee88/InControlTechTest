import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { AppError } from "app/common/app-error";
import 'rxjs/add/operator/catch';
import { NotFoundError } from "app/common/not-found-error";


@Injectable()
export class CategoryService {
  private url:string = "http://incontrolpty.australiaeast.cloudapp.azure.com:7123/webservices/api/category";
  constructor(private http:Http) { }

  getAll() {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let requestData = { "UserId":"1","CategoryId":"1","LoadAttributes":true };

    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.url}`, requestData, options)
      .catch((error:Response)=> {
        if (error.status === 404) 
          return Observable.throw(new NotFoundError(error));
        return Observable.throw(new AppError(error));
      })
  }
}

