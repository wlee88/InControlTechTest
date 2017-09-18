import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'audit-panel',
  templateUrl: './audit-panel.component.html',
  styleUrls: ['./audit-panel.component.css']
})
export class AuditPanelComponent implements OnInit {
  @Input() figure:string;
  @Input() label:string;
  @Input() isActive:Boolean;

  constructor() { }

  ngOnInit() {
    
  }

}
