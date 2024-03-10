import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrageFormulaireComponent } from './parametrage-formulaire.component';

describe('ParametrageFormulaireComponent', () => {
  let component: ParametrageFormulaireComponent;
  let fixture: ComponentFixture<ParametrageFormulaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParametrageFormulaireComponent]
    });
    fixture = TestBed.createComponent(ParametrageFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
