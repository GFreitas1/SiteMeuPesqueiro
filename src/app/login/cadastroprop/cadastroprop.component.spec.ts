import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastropropComponent } from './cadastroprop.component';

describe('CadastropropComponent', () => {
  let component: CadastropropComponent;
  let fixture: ComponentFixture<CadastropropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastropropComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastropropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
