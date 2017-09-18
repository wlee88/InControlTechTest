import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class CategoryService {
  private url:string = "http://incontrolpty.australiaeast.cloudapp.azure.com:7123/webservices/api/category"
  constructor(private http:Http) { }

  getAll() {
    this.http.get(this.url);
  }
}
