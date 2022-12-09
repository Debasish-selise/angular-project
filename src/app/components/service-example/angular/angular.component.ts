import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() item = '';
  @Output() temp = new EventEmitter<any>();

  constructor(
    private commonService: CommonService
  ) { }
  
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

  onEnrollButtonClick() {
    console.log('click');
    this.commonService.openSnackBar('Welcome to Angular course');
    this.temp.emit('Angular course');
  }

}
