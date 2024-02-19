import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMobileComponent } from './detail-mobile.component';

describe('DetailMobileComponent', () => {
  let component: DetailMobileComponent;
  let fixture: ComponentFixture<DetailMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailMobileComponent]
    });
    fixture = TestBed.createComponent(DetailMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
