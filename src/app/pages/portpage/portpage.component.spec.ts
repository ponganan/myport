import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortpageComponent } from './portpage.component';

describe('PortpageComponent', () => {
  let component: PortpageComponent;
  let fixture: ComponentFixture<PortpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
