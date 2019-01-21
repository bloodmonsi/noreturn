import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationPointsComponent } from './generation-points.component';

describe('GenerationPoints', () => {
  let component: GenerationPointsComponent;
  let fixture: ComponentFixture<GenerationPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerationPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerationPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
