import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeziesComponent } from './spezies.component';

describe('SpeziesComponent', () => {
  let component: SpeziesComponent;
  let fixture: ComponentFixture<SpeziesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeziesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeziesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
