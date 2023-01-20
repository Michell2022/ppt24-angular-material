import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebaDialogComponent } from './prueba-dialog/prueba-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EmergenteDialogComponent } from './emergente-dialog/emergente-dialog.component';

@NgModule({
  declarations: [
    PruebaDialogComponent,
    EmergenteDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCommonModule,
    MatFormFieldModule
  ],
  exports: [
    PruebaDialogComponent,
    EmergenteDialogComponent
  ]
})
export class ComponentsModule { }
