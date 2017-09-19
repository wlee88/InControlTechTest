import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input("pass-value") passValue:number;
  @Input("total-value") totalValue:number;

  constructor() { }

  ngOnInit() {
  }

  passPercentageValue(){
    let percentage = (this.passValue / this.totalValue) * 100;
    return `${Math.floor(percentage)}%`;
  }

}
