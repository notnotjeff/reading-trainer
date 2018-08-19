import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingAppComponent } from './reading-app.component';

describe('ReadingAppComponent', () => {
  let component: ReadingAppComponent;
  let fixture: ComponentFixture<ReadingAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
