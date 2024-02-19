import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegieVideoComponent } from './regie-video.component';

describe('RegieVideoComponent', () => {
  let component: RegieVideoComponent;
  let fixture: ComponentFixture<RegieVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegieVideoComponent]
    });
    fixture = TestBed.createComponent(RegieVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
