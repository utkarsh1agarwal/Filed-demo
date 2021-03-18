import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFreeTrialComponent } from './get-free-trial.component';

describe('GetFreeTrialComponent', () => {
  let component: GetFreeTrialComponent;
  let fixture: ComponentFixture<GetFreeTrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetFreeTrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFreeTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
