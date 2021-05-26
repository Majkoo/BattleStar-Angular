import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArenaInComponent } from './arena-in.component';

describe('ArenaInComponent', () => {
  let component: ArenaInComponent;
  let fixture: ComponentFixture<ArenaInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArenaInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArenaInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
