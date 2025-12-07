import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpropComponent } from './loginprop.component';

describe('LoginpropComponent', () => {
  let component: LoginpropComponent;
  let fixture: ComponentFixture<LoginpropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginpropComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginpropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
