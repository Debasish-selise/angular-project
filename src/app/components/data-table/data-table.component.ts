import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  displayedColumns = ['Id', 'FirstName', 'LastName', 'Email'];
  dataSource: any;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getTableData();
  }


  getTableData() {
    this.dataService.getDataFromDatabase().subscribe((response: any) => {
      this.dataSource = response.data;
    });
  }
}
