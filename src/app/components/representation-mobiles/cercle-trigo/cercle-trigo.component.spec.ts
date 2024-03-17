import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CercleTrigoComponent } from './cercle-trigo.component';

describe('CercleTrigoComponent', () => {
  let component: CercleTrigoComponent;
  let fixture: ComponentFixture<CercleTrigoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CercleTrigoComponent]
    });
    fixture = TestBed.createComponent(CercleTrigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
