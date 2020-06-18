import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncentivesListComponent } from './incentives-list.component';

describe('IncentivesListComponent', () => {
  let component: IncentivesListComponent;
  let fixture: ComponentFixture<IncentivesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncentivesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncentivesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
