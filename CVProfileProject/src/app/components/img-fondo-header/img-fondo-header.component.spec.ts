import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgFondoHeaderComponent } from './img-fondo-header.component';

describe('ImgFondoHeaderComponent', () => {
  let component: ImgFondoHeaderComponent;
  let fixture: ComponentFixture<ImgFondoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgFondoHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgFondoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
