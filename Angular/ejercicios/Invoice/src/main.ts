import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { InvoiceComponent } from './app/componets/invoice/invoice'; // Importación corregida

bootstrapApplication(InvoiceComponent, appConfig)
  .catch((err) => console.error(err));