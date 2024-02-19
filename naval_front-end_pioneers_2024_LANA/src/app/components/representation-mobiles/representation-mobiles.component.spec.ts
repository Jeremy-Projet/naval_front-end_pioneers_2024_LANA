import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentationMobilesComponent } from './representation-mobiles.component';

describe('RepresentationMobilesComponent', () => {
  let component: RepresentationMobilesComponent;
  let fixture: ComponentFixture<RepresentationMobilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepresentationMobilesComponent]
    });
    fixture = TestBed.createComponent(RepresentationMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
