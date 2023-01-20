import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmergenteDialogComponent } from '../emergente-dialog/emergente-dialog.component';


@Component({
  selector: 'app-prueba-dialog',
  templateUrl: './prueba-dialog.component.html',
  styleUrls: ['./prueba-dialog.component.css']
})
export class PruebaDialogComponent {

  animal: string = "";
  nombre: string = "";

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(EmergenteDialogComponent, {
      width: '250px',
      data: { nombre: this.nombre, deporte: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
