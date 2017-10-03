import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'audit-panel',
  templateUrl: './audit-nav-panel.component.html',
  styleUrls: ['./audit-nav-panel.component.scss']
})
export class AuditNavPanelComponent implements OnInit {
  @Input() figure:string= "0";
  @Input() label:string;
  @Input() isActive:Boolean;
  @Input() color;

  constructor() { }

  ngOnInit() {
    
  }

  getColor() {
    if (this.color) {
      return [this.color];
    }
    else {
      return [];
    }
  }

}
