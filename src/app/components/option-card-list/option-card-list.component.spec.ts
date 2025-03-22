import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OptionCardListComponent } from './option-card-list.component';

describe('OptionCardListComponent', () => {
  let component: OptionCardListComponent;
  let fixture: ComponentFixture<OptionCardListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [OptionCardListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OptionCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
