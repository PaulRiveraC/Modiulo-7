import { Address } from "./Address";

export class Company {
  ruc!: string;
  name!: string;
  address!: Address; // La propiedad 'direccion' ahora es de tipo Address.
}
