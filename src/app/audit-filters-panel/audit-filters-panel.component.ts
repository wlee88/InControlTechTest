import { Component, OnInit, ViewChild, ElementRef, AfterContentInit, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';
import { CategoryService } from "app/services/category.service";
import { CategoryResponseObject } from "app/services/category-response-object.interface"
import { AuditService, AuditResponse } from "app/services/audit.service";
import { Moment } from "moment"
import * as moment from 'moment';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

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
  fromDateOptions:DatePickerOptions;
  toDateOptions:DatePickerOptions;

  auditResponse: AuditResponse;

  constructor(private categoryService:CategoryService, private auditService: AuditService) { 
    this.fromDateOptions = new DatePickerOptions();
    this.toDateOptions = new DatePickerOptions();
  }

  ngOnInit() {
    let dt = new Date();
    let year = dt.getFullYear(), month = dt.getMonth();
    let format = "dd/mm/yyyy";

    this.fromDateOptions.initialDate = moment().startOf('month').toDate();
    this.toDateOptions.initialDate = moment().endOf('month').toDate();
    
    
  }

  ngAfterViewInit() {
    
    this.form.control.valueChanges
      .subscribe(values => this.change.emit(values));
  }
}

export interface AuditFiltersFormEventArgs {
  toDate:any,
  fromDate:any,
  category: number
}
