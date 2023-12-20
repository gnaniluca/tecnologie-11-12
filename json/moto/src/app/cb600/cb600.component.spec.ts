import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cb600Component } from './cb600.component';

describe('Cb600Component', () => {
  let component: Cb600Component;
  let fixture: ComponentFixture<Cb600Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cb600Component]
    });
    fixture = TestBed.createComponent(Cb600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
