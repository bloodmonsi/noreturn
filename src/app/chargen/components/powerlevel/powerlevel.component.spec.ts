import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerlevelComponent } from './powerlevel.component';

describe('PowerlevelComponent', () => {
  let component: PowerlevelComponent;
  let fixture: ComponentFixture<PowerlevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerlevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
