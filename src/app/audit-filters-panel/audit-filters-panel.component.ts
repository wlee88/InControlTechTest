import { Component, OnInit, ViewChild, ElementRef, AfterContentInit, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';
import { CategoryService, CategoryResponseObject } from "app/services/category.service";
import { AuditService, AuditResponse } from "app/services/audit.service";
import { Moment } from "moment"
import * as moment from 'moment';
@Component({
  selector: 'audit-filters-panel',
  templateUrl: './audit-filters-panel.component.html',
  styleUrls: ['./audit-filters-panel.component.css']
})
export class AuditFiltersPanelComponent implements OnInit, AfterViewInit {
  
  @ViewChild("form") form;
  @Input("category-data") categoryData: CategoryResponseObject;

  @Output() change = new EventEmitter();

  fromDate;
  toDate;
  selectedCategoryValue = 0;

  auditResponse: AuditResponse;

  constructor(private categoryService:CategoryService, private auditService: AuditService) { }

  ngOnInit() {
    let dt = new Date();
    let year = dt.getFullYear(), month = dt.getMonth();
    let format = "dd/mm/yyyy";

    this.fromDate = moment().startOf('month');
    this.toDate = moment().endOf('month');
    
  }

  ngAfterViewInit() {
    
    this.form.control.valueChanges
      .subscribe(values => this.change.emit(values));
  }
}

export interface AuditFiltersFormEventArgs {
  toDate:any,
  fromDate:Moment,
  category: number
}
