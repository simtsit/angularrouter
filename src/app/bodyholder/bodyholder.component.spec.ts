import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyholderComponent } from './bodyholder.component';

describe('BodyholderComponent', () => {
  let component: BodyholderComponent;
  let fixture: ComponentFixture<BodyholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
