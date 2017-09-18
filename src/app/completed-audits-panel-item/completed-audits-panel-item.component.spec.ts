import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedAuditsPanelItemComponent } from './completed-audits-panel-item.component';

describe('CompletedAuditsPanelItemComponent', () => {
  let component: CompletedAuditsPanelItemComponent;
  let fixture: ComponentFixture<CompletedAuditsPanelItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedAuditsPanelItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedAuditsPanelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
