import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cb500Component } from './cb500.component';

describe('Cb500Component', () => {
  let component: Cb500Component;
  let fixture: ComponentFixture<Cb500Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cb500Component]
    });
    fixture = TestBed.createComponent(Cb500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
