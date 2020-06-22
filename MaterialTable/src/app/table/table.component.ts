import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { People } from '../interfaces/people';
import { PeopleService } from '../services/people-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'Name', 'Job', 'Email'];
  dataSource: MatTableDataSource<People>;
  constructor(private peopleSerice: PeopleService) { }

  ngOnInit(): void {
  this.dataSource = new MatTableDataSource(this.peopleSerice.getMembers());
  }

}
