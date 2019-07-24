import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreFilterComponent } from './genre-filter.component';

describe('GenreFilterComponent', () => {
  let component: GenreFilterComponent;
  let fixture: ComponentFixture<GenreFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
