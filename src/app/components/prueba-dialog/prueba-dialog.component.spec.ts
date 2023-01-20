import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaDialogComponent } from './prueba-dialog.component';

describe('PruebaDialogComponent', () => {
  let component: PruebaDialogComponent;
  let fixture: ComponentFixture<PruebaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
