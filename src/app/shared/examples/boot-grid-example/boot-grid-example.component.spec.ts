import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootGridExampleComponent } from './boot-grid-example.component';

describe('BootGridExampleComponent', () => {
  let component: BootGridExampleComponent;
  let fixture: ComponentFixture<BootGridExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootGridExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootGridExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
