import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMobileFormulaireComponent } from './detail-mobile-formulaire.component';

describe('DetailMobileFormulaireComponent', () => {
  let component: DetailMobileFormulaireComponent;
  let fixture: ComponentFixture<DetailMobileFormulaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailMobileFormulaireComponent]
    });
    fixture = TestBed.createComponent(DetailMobileFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
