import { Component, OnInit, ViewChild, ElementRef, AfterContentInit, AfterViewInit } from '@angular/core';
import { CategoryService, CategoryResponseObject } from "app/services/category.service";
import { AuditService } from "app/services/audit.service";
import { Moment } from "moment/moment";

@Component({
  selector: 'audit-filters-panel',
  templateUrl: './audit-filters-panel.component.html',
  styleUrls: ['./audit-filters-panel.component.css']
})
export class AuditFiltersPanelComponent implements OnInit, AfterViewInit {
  
  fromDate: string;
  toDate:string;
  @ViewChild("form") form;

  categoryData: CategoryResponseObject;

  constructor(private categoryService:CategoryService, private auditService: AuditService) { }

  ngOnInit() {
    // todo: move this to utilities service
    let dt = new Date();
    let year = dt.getFullYear(), month = dt.getMonth();
    let format = "dd/mm/yyyy";

    this.fromDate = new Date().toString();
    this.toDate = new Date(year, month + 1, 0).toDateString();

    this.categoryService.getAll().subscribe((response) => {
      this.categoryData = response.json();
    });
  }

  ngAfterViewInit() {
    this.form.control.valueChanges
      .subscribe(values => this.onFormChange(values));
  }

  onFormChange(auditFilterFormFields:AuditFilterFormFields) {
    if (auditFilterFormFields.category == 1) {
      this.auditService.getCompletedAudits(auditFilterFormFields.fromDate.valueOf(),
        auditFilterFormFields.toDate.valueOf()).subscribe(response => console.log(response.json()));
    } 
    
  }

}

interface AuditFilterFormFields {
  toDate:any,
  fromDate:Moment,
  category: number
}
