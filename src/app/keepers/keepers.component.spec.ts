import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepersComponent } from './keepers.component';

describe('KeepersComponent', () => {
  let component: KeepersComponent;
  let fixture: ComponentFixture<KeepersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeepersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeepersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
