import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducCertfComponent } from './educ-certf.component';

describe('EducCertfComponent', () => {
  let component: EducCertfComponent;
  let fixture: ComponentFixture<EducCertfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducCertfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducCertfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
