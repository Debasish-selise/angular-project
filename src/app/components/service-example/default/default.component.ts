import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  item123 = 'hello world';

  constructor() { }

  ngOnInit(): void {
  }

  onEnrollment(event: String) {
    console.log(event);
  }

}
