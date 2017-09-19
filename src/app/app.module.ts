import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { DatePickerModule } from 'angular-io-datepicker/src/datepicker';
import { OverlayModule } from 'angular-io-overlay/src/overlay';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuditService } from "app/services/audit.service";
import { CompletedAuditsMainComponent } from './completed-audits-main/completed-audits-main.component';
import { AuditPanelComponent } from './audit-panel/audit-panel.component';
import { AuditFiltersPanelComponent } from './audit-filters-panel/audit-filters-panel.component';
import { CompletedAuditsPanelComponent } from './completed-audits-panel/completed-audits-panel.component';
import { CompletedAuditsPanelItemComponent } from './completed-audits-panel-item/completed-audits-panel-item.component';
import { CategoryService } from "app/services/category.service";
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CompletedAuditsMainComponent,
    AuditPanelComponent,
    AuditFiltersPanelComponent,
    CompletedAuditsPanelComponent,
    CompletedAuditsPanelItemComponent,
    ProgressBarComponent
     ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    OverlayModule,
    DatePickerModule,
    RouterModule.forRoot([
      { path: '', component: CompletedAuditsMainComponent }
    ])
  ],
  providers: [
    AuditService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
