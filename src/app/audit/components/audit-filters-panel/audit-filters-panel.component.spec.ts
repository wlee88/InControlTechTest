import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditFiltersPanelComponent } from './audit-filters-panel.component';

describe('AuditFiltersPanelComponent', () => {
  let component: AuditFiltersPanelComponent;
  let fixture: ComponentFixture<AuditFiltersPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditFiltersPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditFiltersPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
