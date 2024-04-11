import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myapp1ListComponent } from './myapp1-list.component';

describe('Myapp1ListComponent', () => {
  let component: Myapp1ListComponent;
  let fixture: ComponentFixture<Myapp1ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Myapp1ListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Myapp1ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
