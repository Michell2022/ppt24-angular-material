import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-emergente-dialog',
  templateUrl: './emergente-dialog.component.html',
  styleUrls: ['./emergente-dialog.component.css']
})
export class EmergenteDialogComponent {

  constructor(public dialogRef: MatDialogRef<EmergenteDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
