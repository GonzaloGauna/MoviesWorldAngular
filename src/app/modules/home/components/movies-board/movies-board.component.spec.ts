import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesBoardComponent } from './movies-board.component';

describe('MoviesBoardComponent', () => {
  let component: MoviesBoardComponent;
  let fixture: ComponentFixture<MoviesBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
