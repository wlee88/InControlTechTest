import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuditService } from "app/services/audit.service";
import { CompletedAuditsMainComponent } from './completed-audits-main/completed-audits-main.component';
import { AuditPanelComponent } from './audit-panel/audit-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CompletedAuditsMainComponent,
    AuditPanelComponent
     ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: CompletedAuditsMainComponent }
    ])
  ],
  providers: [
    AuditService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
