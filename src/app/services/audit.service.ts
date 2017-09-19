import { Injectable, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from 'rxjs';
import { BadInputError } from "app/common/bad-input-error";
@Injectable()
export class AuditService implements OnInit {
  private url:string = "http://incontrolpty.australiaeast.cloudapp.azure.com:7123/webservices/api/CategoryCompletedAudits"

  constructor(private http:Http) { }
   ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  getCompletedAudits(startMilis: string, endMillis: string) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let requestData = { "UserId": 1, "StartMillis": startMilis, "EndMillis": endMillis };
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.url, requestData, options)
      .catch((error:Response) => {
        if (error.status === 400) {
          return Observable.throw(new BadInputError(error.json))
        }
      })

  }
}

export interface AuditItem {
  CategoryId: Number,
  CategoryName: String,
  CompletedAuditCount: Number,
  FailedAuditCount: Number,
  PassedAuditCount: Number
}

export interface AuditResponse {
  TotalPassedAuditCount: Number,
  TotalFailedAuditCount: Number,
  Items: Array<AuditItem>
}
/* Sample response data */

/*
{
  "TotalPassedAuditCount": 1,
  "TotalFailedAuditCount": 2,
  "TotalAuditCount": 3,
  "Items": [
    {
      "CategoryId": 1,
      "CategoryName": "sample string 2",
      "PassedAuditCount": 3,
      "FailedAuditCount": 4,
      "CompletedAuditCount": 5
    },
    {
      "CategoryId": 1,
      "CategoryName": "sample string 2",
      "PassedAuditCount": 3,
      "FailedAuditCount": 4,
      "CompletedAuditCount": 5
    }
  ]
}
*/