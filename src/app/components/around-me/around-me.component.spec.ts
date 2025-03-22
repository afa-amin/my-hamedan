import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AroundMeComponent } from './around-me.component';

describe('AroundMeComponent', () => {
  let component: AroundMeComponent;
  let fixture: ComponentFixture<AroundMeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AroundMeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AroundMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
