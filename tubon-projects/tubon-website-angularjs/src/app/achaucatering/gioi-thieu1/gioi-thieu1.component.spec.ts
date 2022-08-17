import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GioiThieu1Component } from './gioi-thieu1.component';

describe('GioiThieu1Component', () => {
  let component: GioiThieu1Component;
  let fixture: ComponentFixture<GioiThieu1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GioiThieu1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GioiThieu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
