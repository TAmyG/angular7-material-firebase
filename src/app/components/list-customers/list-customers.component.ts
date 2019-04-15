import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { CustomerI } from 'src/app/models/customer.interface';
import { CustomerService } from 'src/app/services/customer.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss']
})
export class ListCustomersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'city', 'order', 'actions', 'new'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private customerService: CustomerService,
    private matDialog: MatDialog
  ) {}

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
    this.customerService.clearSelected();
    this.openModal();
    if (element) {
      this.customerService.selected = element;
    }
  }

  onDelete(id: string) {
    this.customerService.deleteCustomer(id);
  }

  openModal(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: 'Modal'
    };
    dialogConfig.autoFocus = true;
    this.matDialog.open(FormComponent, dialogConfig);
  }
}
