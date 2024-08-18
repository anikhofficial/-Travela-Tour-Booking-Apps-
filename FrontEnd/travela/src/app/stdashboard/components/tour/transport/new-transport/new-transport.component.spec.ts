import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTransportComponent } from './new-transport.component';

describe('NewTransportComponent', () => {
  let component: NewTransportComponent;
  let fixture: ComponentFixture<NewTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewTransportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
