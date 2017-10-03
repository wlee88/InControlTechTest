import { Component, OnInit, Input } from '@angular/core';
import { AuditItem } from "app/audit/services/audit.service";

@Component({
  selector: 'completed-audits-panel',
  templateUrl: './completed-audits-panel.component.html',
  styleUrls: ['./completed-audits-panel.component.css']
})
export class CompletedAuditsPanelComponent implements OnInit {
  @Input("completed-audits") completedAudits: AuditItem[];
  constructor() { }

  ngOnInit() {
    
  }

}
