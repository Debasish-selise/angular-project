import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.scss']
})
export class PythonComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onEnrollButtonClick() {
    console.log('click');
    this.snackBar.open('Welcome to Python course', 'close');
  }

}
