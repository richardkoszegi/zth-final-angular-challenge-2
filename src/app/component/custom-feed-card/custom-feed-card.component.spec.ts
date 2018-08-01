import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFeedCardComponent } from './custom-feed-card.component';

describe('CustomFeedCardComponent', () => {
  let component: CustomFeedCardComponent;
  let fixture: ComponentFixture<CustomFeedCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFeedCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFeedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
