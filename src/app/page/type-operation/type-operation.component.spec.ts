import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOperationComponent } from './type-operation.component';

describe('TypeOperationComponent', () => {
  let component: TypeOperationComponent;
  let fixture: ComponentFixture<TypeOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
