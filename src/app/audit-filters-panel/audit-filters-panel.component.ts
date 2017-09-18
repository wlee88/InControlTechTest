import { Component, OnInit, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import { CategoryService, CategoryResponseObject } from "app/services/category.service";

@Component({
  selector: 'audit-filters-panel',
  templateUrl: './audit-filters-panel.component.html',
  styleUrls: ['./audit-filters-panel.component.css']
})
export class AuditFiltersPanelComponent implements OnInit {
  fromDate:string;
  toDate:string;

  categoryData: CategoryResponseObject;

  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    // todo: move this to utilities service
    let dt = new Date();
    let year = dt.getFullYear(), month = dt.getMonth();
    let format = "dd/mm/yyyy";

    this.fromDate = new Date(year, month, 1).toDateString();
    this.toDate = new Date(year, month + 1, 0).toDateString();

    this.categoryService.getAll().subscribe((response) => {
      this.categoryData = response.json();
    });
  }


}
