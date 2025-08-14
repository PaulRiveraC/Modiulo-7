import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../model/Invoice';
import { InvoiceService } from '../../services/invoice';

@Component({
  selector: 'app-invoice',
  imports: [],
  templateUrl: './invoice.html',
})
export class InvoiceComponent implements OnInit {

  invoice!: Invoice;

  constructor(private service: InvoiceService) {}

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }
}