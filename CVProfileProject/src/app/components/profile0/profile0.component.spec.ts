import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Profile0Component } from './profile0.component';

describe('Profile0Component', () => {
  let component: Profile0Component;
  let fixture: ComponentFixture<Profile0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Profile0Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Profile0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
