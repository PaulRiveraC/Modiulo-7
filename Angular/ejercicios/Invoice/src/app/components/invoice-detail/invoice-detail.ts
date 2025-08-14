import { Component, Input } from '@angular/core';
import { InvoiceItem } from '../../model/InvoiceItem';
import { InvoiceItemComponent } from '../invoice-item/invoice-item';

@Component({
  selector: 'app-invoice-detail',
  standalone: true,
  imports: [InvoiceItemComponent],
  templateUrl: './invoice-detail.html',
})
export class InvoiceDetailComponent {
  @Input() items!: InvoiceItem[];
}
