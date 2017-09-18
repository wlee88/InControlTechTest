import { Component, OnInit } from '@angular/core';
import { CategoryService, CategoryResponseObject } from "app/services/category.service";
import { AuditService } from "app/services/audit.service";

@Component({
  selector: 'completed-audits-main-component',
  templateUrl: './completed-audits-main.component.html',
  styleUrls: ['./completed-audits-main.component.css']
})

export class CompletedAuditsMainComponent implements OnInit {
  completedAuditsCount:Number = 0;  
  categoryData:CategoryResponseObject;

  constructor(private auditService: AuditService) { }

  ngOnInit() {

  }

}
