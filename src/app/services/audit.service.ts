import { Injectable, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class AuditService implements OnInit {
  
  constructor(private http:Http) { }
   ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}
