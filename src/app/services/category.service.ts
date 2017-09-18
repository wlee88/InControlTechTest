import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";

@Injectable()
export class CategoryService {
  private url:string = "http://incontrolpty.australiaeast.cloudapp.azure.com:7123/webservices/api/category"
  constructor(private http:Http) { }

  getAll() {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let requestData = { "UserId":"1","CategoryId":"1","LoadAttributes":true };

    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, requestData, options);
  }
}
