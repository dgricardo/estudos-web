import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortPollingComponent } from './short-polling.component';

describe('ShortPollingComponent', () => {
  let component: ShortPollingComponent;
  let fixture: ComponentFixture<ShortPollingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortPollingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortPollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
