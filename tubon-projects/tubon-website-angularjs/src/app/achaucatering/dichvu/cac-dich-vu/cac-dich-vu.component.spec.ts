import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CacDichVuComponent } from './cac-dich-vu.component';

describe('CacDichVuComponent', () => {
  let component: CacDichVuComponent;
  let fixture: ComponentFixture<CacDichVuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CacDichVuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CacDichVuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
