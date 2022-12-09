import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.scss']
})
export class ObservableExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.funcOne();
    this.funcTwo();
  }

  funcOne() {
    this.getData().subscribe((data) => {
      console.log('From function one', data);
      console.log('hello world');
    });
  }

  funcTwo() {
    this.getData().subscribe((data) => {
      console.log('From function two', data);
    });
  }

  getData() {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next('task completed');
      }, 2);
    });
  }

}
