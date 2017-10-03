import { Component, OnInit } from '@angular/core';
import { CategoryService } from "app/services/category.service";
import { AuditService, AuditResponse } from "app/services/audit.service";
import { AuditFiltersFormEventArgs } from 'app/audit-filters-panel/audit-filters-panel.component';
import { AppError } from "app/common/app-error";
import { BadInputError } from "app/common/bad-input-error";
import { NotFoundError } from "app/common/not-found-error";
import { CategoryResponseObject } from "app/services/category-response-object.interface";


@Component({
  selector: 'completed-audits-main-component',
  templateUrl: './completed-audits-main.component.html',
  styleUrls: ['./completed-audits-main.component.css']
})

export class CompletedAuditsMainComponent implements OnInit {
  categoryData:CategoryResponseObject;
  completedAuditsData: AuditResponse;

  constructor(private auditService: AuditService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAll().subscribe((response) => {
      this.categoryData = response.json();
    },
    (error: AppError) => {
      if (error instanceof BadInputError) {
        console.log("Bad Input Error", error);
      }  
      else if (error instanceof NotFoundError) {
        console.log("Resource not found", error);
      }
      else {
        throw error;
      }
    });
  }

  onAuditFiltersPanelChange(auditFiltersFormEventArgs: AuditFiltersFormEventArgs) {
    let category = auditFiltersFormEventArgs.category,
        fromDate = auditFiltersFormEventArgs.fromDate,
          toDate = auditFiltersFormEventArgs.toDate;

    if (fromDate && toDate 
    && fromDate.momentObj && toDate.momentObj) {
      this.auditService.getCompletedAudits(fromDate.momentObj.format('x'),
       toDate.momentObj.format('x'))
        .subscribe(response => {
          this.completedAuditsData = response.json();
        },(error: AppError) => {
          if (error instanceof BadInputError) {
            console.log("Bad Input Error", error);
          }
          else if (error instanceof NotFoundError) {
            console.log("Resource not found", error);
          }
          else {
            throw error;
          }
        });
    }
  }

  

}
