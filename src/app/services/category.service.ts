import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";

@Injectable()

export class CategoryService {
  private proxyurl = "https://cors-anywhere.herokuapp.com/"; //proxy hack/work around CORS OPTIONS issue.
  private url:string = "http://incontrolpty.australiaeast.cloudapp.azure.com:7123/webservices/api/category";
  constructor(private http:Http) { }

  getAll() {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let requestData = { "UserId":"1","CategoryId":"1","LoadAttributes":true };

    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.proxyurl}${this.url}`, requestData, options);
  }
}
export interface CategoryResponseObject {
  CategoryId: Number,
  name: string,
  AttributeTypes: Array<object>,
  DemeritStartingScore: Number,
  DefaultTypeId: Number
}