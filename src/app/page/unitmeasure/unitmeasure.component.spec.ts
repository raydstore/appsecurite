import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitmeasureComponent } from './unitmeasure.component';

describe('UnitmeasureComponent', () => {
  let component: UnitmeasureComponent;
  let fixture: ComponentFixture<UnitmeasureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitmeasureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitmeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
