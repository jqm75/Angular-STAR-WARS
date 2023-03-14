import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsBgComponent } from './stars-bg.component';

describe('StarsBgComponent', () => {
  let component: StarsBgComponent;
  let fixture: ComponentFixture<StarsBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarsBgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarsBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
