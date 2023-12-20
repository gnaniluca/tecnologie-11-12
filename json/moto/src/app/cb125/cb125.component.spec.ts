import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cb125Component } from './cb125.component';

describe('Cb125Component', () => {
  let component: Cb125Component;
  let fixture: ComponentFixture<Cb125Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cb125Component]
    });
    fixture = TestBed.createComponent(Cb125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
