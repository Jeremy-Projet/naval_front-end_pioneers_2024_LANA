import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagrammeDensiteComponent } from './diagramme-densite.component';

describe('DiagrammeDensiteComponent', () => {
  let component: DiagrammeDensiteComponent;
  let fixture: ComponentFixture<DiagrammeDensiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiagrammeDensiteComponent]
    });
    fixture = TestBed.createComponent(DiagrammeDensiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
