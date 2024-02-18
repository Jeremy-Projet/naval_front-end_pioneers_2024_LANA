import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandeauEquipeComponent } from './bandeau-equipe.component';

describe('BandeauEquipeComponent', () => {
  let component: BandeauEquipeComponent;
  let fixture: ComponentFixture<BandeauEquipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BandeauEquipeComponent]
    });
    fixture = TestBed.createComponent(BandeauEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
