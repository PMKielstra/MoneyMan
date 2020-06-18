import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncentivesEditorComponent } from './incentives-editor.component';

describe('IncentivesEditorComponent', () => {
  let component: IncentivesEditorComponent;
  let fixture: ComponentFixture<IncentivesEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncentivesEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncentivesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
