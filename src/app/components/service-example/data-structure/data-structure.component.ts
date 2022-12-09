import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-data-structure',
  templateUrl: './data-structure.component.html',
  styleUrls: ['./data-structure.component.scss']
})
export class DataStructureComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onEnrollButtonClick() {
    console.log('click');
    this.snackBar.open('Welcome to Algorithm course', 'close');
  }

}
