import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myapp1DetailsComponent } from './myapp1-details.component';

describe('Myapp1DetailsComponent', () => {
  let component: Myapp1DetailsComponent;
  let fixture: ComponentFixture<Myapp1DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Myapp1DetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Myapp1DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
