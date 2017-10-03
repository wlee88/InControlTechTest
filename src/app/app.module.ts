import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { DatePickerModule } from 'ng2-datepicker';

import { AppComponent } from './app.component';
import { AuditService } from "app/audit/services/audit.service";
import { AuditNavPanelComponent } from 'app/audit/components/audit-nav-panel/audit-nav-panel.component';
import { AuditFiltersPanelComponent } from 'app/audit/components/audit-filters-panel/audit-filters-panel.component';
import { CompletedAuditsPanelComponent } from 'app/audit/components/completed-audits-panel/completed-audits-panel.component';
import { CategoryService } from "app/audit/services/category.service";
import { ProgressBarComponent } from './common/progress-bar/progress-bar.component';
import { AppErrorHandler } from "app/common/app-error-handler";
import { AuditNav } from 'app/audit/components/audit-nav/audit-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AuditNav,
    AuditNavPanelComponent,
    AuditFiltersPanelComponent,
    CompletedAuditsPanelComponent,
    ProgressBarComponent
     ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatePickerModule,
    RouterModule.forRoot([
      { path: '', component: AuditNav }
    ])
  ],
  providers: [
    AuditService,
    CategoryService,
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
