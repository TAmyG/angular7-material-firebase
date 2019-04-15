import { Component, OnInit, Inject } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  constructor(
    public customerService: CustomerService,
    private dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {}

  ngOnInit() {}

  onSaveForm() {
    if (this.customerService.selected.id === null) {
      const newCustomer = {
        name: this.customerService.selected.name,
        city: this.customerService.selected.city,
        order: this.customerService.selected.order
      };
      this.customerService.addCustomer(newCustomer);
    } else {
      this.customerService.editCustomer(this.customerService.selected);
    }
    this.close();
    this.customerService.clearSelected();
  }

  close(): void {
    this.dialogRef.close();
  }
}
