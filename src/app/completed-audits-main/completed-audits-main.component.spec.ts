import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedAuditsMainComponent } from './completed-audits-main.component';

describe('CompletedAuditsMainComponentComponent', () => {
  let component: CompletedAuditsMainComponent;
  let fixture: ComponentFixture<CompletedAuditsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedAuditsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedAuditsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
