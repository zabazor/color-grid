import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileTrayComponent } from './tile-tray.component';

describe('TileTrayComponent', () => {
  let component: TileTrayComponent;
  let fixture: ComponentFixture<TileTrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileTrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
