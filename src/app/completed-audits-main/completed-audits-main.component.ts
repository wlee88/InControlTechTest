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
    console.log("recieved audit filters form event args", auditFiltersFormEventArgs);

    let category = auditFiltersFormEventArgs.category,
        fromDate = auditFiltersFormEventArgs.fromDate,
          toDate = auditFiltersFormEventArgs.toDate;
          
    if (fromDate && toDate) {
      this.auditService.getCompletedAudits(fromDate.format('x'),
       toDate.format('x'))
        .subscribe(response => {
          this.completedAuditsData = response.json();
        });
    }
  }

}
