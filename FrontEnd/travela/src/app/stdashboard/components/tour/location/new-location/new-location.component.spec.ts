import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLocationComponent } from './new-location.component';

describe('NewLocationComponent', () => {
  let component: NewLocationComponent;
  let fixture: ComponentFixture<NewLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
