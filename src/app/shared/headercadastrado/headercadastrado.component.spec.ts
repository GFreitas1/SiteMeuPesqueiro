import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadercadastradoComponent } from './headercadastrado.component';

describe('HeadercadastradoComponent', () => {
  let component: HeadercadastradoComponent;
  let fixture: ComponentFixture<HeadercadastradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadercadastradoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadercadastradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
