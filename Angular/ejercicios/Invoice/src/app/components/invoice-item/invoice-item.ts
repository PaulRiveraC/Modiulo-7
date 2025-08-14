import { Component, Input } from '@angular/core';
import { InvoiceItem } from '../../model/InvoiceItem';

@Component({
  selector: 'invoice-item',
  standalone: true,
  imports: [],
  template: `
    <tr>
      <td>{{ item.product.name }}</td>
      <td>{{ item.product.price }}</td>
      <td>{{ item.quantity }}</td>
    </tr>
  `,
})
export class InvoiceItemComponent {
  @Input() item!: InvoiceItem;
}
