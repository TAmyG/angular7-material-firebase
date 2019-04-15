import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { CustomerI } from 'src/app/models/customer.interface';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss']
})
export class ListCustomersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'city', 'order', 'actions'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService
      .getAllCustomers()
      .subscribe(res => (this.dataSource.data = res));
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEdit(element) {
    if (element) {
      this.customerService.selected = element;
    }
  }

  onDelete(id: string) {
    this.customerService.deleteCustomer(id);
  }
}
