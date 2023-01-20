import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergenteDialogComponent } from './emergente-dialog.component';

describe('EmergenteDialogComponent', () => {
  let component: EmergenteDialogComponent;
  let fixture: ComponentFixture<EmergenteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergenteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergenteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
