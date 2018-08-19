import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingPreferencesComponent } from './reading-preferences.component';

describe('ReadingPreferencesComponent', () => {
  let component: ReadingPreferencesComponent;
  let fixture: ComponentFixture<ReadingPreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingPreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
