import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMyapp1Component } from './add-myapp1.component';

describe('AddMyapp1Component', () => {
  let component: AddMyapp1Component;
  let fixture: ComponentFixture<AddMyapp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMyapp1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMyapp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
