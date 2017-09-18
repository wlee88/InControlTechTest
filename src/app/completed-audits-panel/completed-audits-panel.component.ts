import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'completed-audits-panel',
  templateUrl: './completed-audits-panel.component.html',
  styleUrls: ['./completed-audits-panel.component.css']
})
export class CompletedAuditsPanelComponent implements OnInit {
  audits: any[];
  constructor() {
    this.audits = [];
   }

  ngOnInit() {
    this.audits.push({
      department: "test department",
      completed: 32
    }, {
      department: "test department2",
      completed: 54
    })
  }

}