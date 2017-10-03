import { Component, OnInit } from '@angular/core';
import { CategoryService } from "app/audit/services/category.service";
import { AuditService, AuditResponse } from "app/audit/services/audit.service";
import { AppError } from "app/common/app-error";
import { BadInputError } from "app/common/bad-input-error";
import { NotFoundError } from "app/common/not-found-error";
import { CategoryResponseObject } from "app/audit/services/category-response-object.interface";


@Component({
  selector: 'audit-nav',
  templateUrl: './audit-nav.component.html',
  styleUrls: ['./audit-nav.component.css']
})

export class AuditNav implements OnInit {
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

  onAuditFiltersPanelChange(auditFiltersFormEventArgs) {
    let category = auditFiltersFormEventArgs.category,
        fromDate = auditFiltersFormEventArgs.fromDate,
          toDate = auditFiltersFormEventArgs.toDate;

    if (fromDate && toDate 
     && fromDate.momentObj 
     && toDate.momentObj) {
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
