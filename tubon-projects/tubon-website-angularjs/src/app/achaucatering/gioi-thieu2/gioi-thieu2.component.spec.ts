import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GioiThieu2Component } from './gioi-thieu2.component';

describe('GioiThieu2Component', () => {
  let component: GioiThieu2Component;
  let fixture: ComponentFixture<GioiThieu2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GioiThieu2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GioiThieu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
