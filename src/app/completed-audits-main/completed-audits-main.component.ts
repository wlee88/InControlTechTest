import { Component, OnInit } from '@angular/core';
import { CategoryService, CategoryResponseObject } from "app/services/category.service";
import { AuditService } from "app/services/audit.service";
import { AuditFiltersFormEventArgs } from 'app/audit-filters-panel/audit-filters-panel.component';


@Component({
  selector: 'completed-audits-main-component',
  templateUrl: './completed-audits-main.component.html',
  styleUrls: ['./completed-audits-main.component.css']
})

export class CompletedAuditsMainComponent implements OnInit {
  categoryData:CategoryResponseObject;
  completedAuditsData: AuditFiltersFormEventArgs;

  constructor(private auditService: AuditService) { }

  ngOnInit() {

  }

  onAuditFiltersPanelChange(auditFiltersFormEventArgs: AuditFiltersFormEventArgs) {
    let category = auditFiltersFormEventArgs.category;
    if (category && category !=  undefined && category != null) {
      this.auditService.getCompletedAudits(auditFiltersFormEventArgs.fromDate.valueOf(),
        auditFiltersFormEventArgs.toDate.valueOf())
        .subscribe(response => {
          this.completedAuditsData = response.json();
          console.log(this.completedAuditsData);
        });
    } 
  }

}
