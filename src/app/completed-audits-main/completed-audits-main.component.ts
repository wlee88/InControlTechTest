import { Component, OnInit } from '@angular/core';
import { CategoryService } from "app/services/category.service";

@Component({
  selector: 'completed-audits-main-component',
  templateUrl: './completed-audits-main.component.html',
  styleUrls: ['./completed-audits-main.component.css']
})
export class CompletedAuditsMainComponent implements OnInit {
  completedAuditsCount:Number;  
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAll()
      .subscribe((response) =>{
        console.log(response);
      })
  }

}
