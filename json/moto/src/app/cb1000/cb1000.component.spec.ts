import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cb1000Component } from './cb1000.component';

describe('Cb1000Component', () => {
  let component: Cb1000Component;
  let fixture: ComponentFixture<Cb1000Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cb1000Component]
    });
    fixture = TestBed.createComponent(Cb1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
