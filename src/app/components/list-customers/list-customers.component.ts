import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { CustomerI } from 'src/app/models/customer.interface';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss']
})
export class ListCustomersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'city', 'order'];
  dataSource = new MatTableDataSource();

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe(res => console.log(res));
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
