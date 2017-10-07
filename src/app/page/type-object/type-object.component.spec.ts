import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeObjectComponent } from './type-object.component';

describe('TypeObjectComponent', () => {
  let component: TypeObjectComponent;
  let fixture: ComponentFixture<TypeObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
