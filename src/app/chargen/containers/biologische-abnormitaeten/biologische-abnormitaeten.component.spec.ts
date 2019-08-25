import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiologischeAbnormitaetenComponent } from './biologische-abnormitaeten.component';

describe('BiologischeAbnormitaetenComponent', () => {
  let component: BiologischeAbnormitaetenComponent;
  let fixture: ComponentFixture<BiologischeAbnormitaetenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiologischeAbnormitaetenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiologischeAbnormitaetenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
