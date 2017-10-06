import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiltletaskComponent } from './tiltletask.component';

describe('TiltletaskComponent', () => {
  let component: TiltletaskComponent;
  let fixture: ComponentFixture<TiltletaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiltletaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiltletaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
