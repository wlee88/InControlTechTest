import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedAuditsPanelComponent } from './completed-audits-panel.component';

describe('CompletedAuditsPanelComponent', () => {
  let component: CompletedAuditsPanelComponent;
  let fixture: ComponentFixture<CompletedAuditsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedAuditsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedAuditsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
