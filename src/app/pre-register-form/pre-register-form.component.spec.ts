import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreRegisterFormComponent } from './pre-register-form.component';

describe('PreRegisterFormComponent', () => {
  let component: PreRegisterFormComponent;
  let fixture: ComponentFixture<PreRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreRegisterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
