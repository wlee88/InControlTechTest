import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditNavPanelComponent } from './audit-nav-panel.component';

describe('AuditPanelComponent', () => {
  let component: AuditNavPanelComponent;
  let fixture: ComponentFixture<AuditNavPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditNavPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditNavPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
