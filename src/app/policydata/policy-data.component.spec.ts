import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyDataComponent } from './policy-data.component';

describe('PolicydataComponent', () => {
  let component: PolicyDataComponent;
  let fixture: ComponentFixture<PolicyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
