import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CitizenComponent } from './citizen.component';

describe('CitizenComponent', () => {
  let component: CitizenComponent;
  let fixture: ComponentFixture<CitizenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CitizenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CitizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
