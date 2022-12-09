import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  name: string = '';
  jobTitle: string = '';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  createUser() {
    this.dataService.createUser(this.name, this.jobTitle).subscribe((response) => {
      console.log('create user', response);
    });
  }

}
