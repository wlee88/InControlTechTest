import { Component, OnInit } from '@angular/core';
import { CategoryService, CategoryResponseObject } from "app/services/category.service";

@Component({
  selector: 'audit-filters-panel',
  templateUrl: './audit-filters-panel.component.html',
  styleUrls: ['./audit-filters-panel.component.css']
})
export class AuditFiltersPanelComponent implements OnInit {
  categoryData:CategoryResponseObject;
  
  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    this.categoryService.getAll().subscribe((response) => {
      this.categoryData = response.json();
    });
  }

}
