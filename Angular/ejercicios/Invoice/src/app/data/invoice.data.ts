import { Invoice } from "../model/Invoice";
import { Category } from "../model/Category";

const categorySnacks: Category = {
  id: 1,
  name: "Snacks",
};

export const invoiceData: Invoice = {
  id: "001",
  company: {
    ruc: "1792285747001",
    name: "Clear Minds Consultores",
    address: { // <-- Esta propiedad ha sido corregida a 'address'
      city: "Quito",
      principalStreet: "Juan Pablo Sanz",
      secondaryStreet: "Iñaquito",
      code: "N-57",
    },
  },
  customer: {
    id: "1714616123",
    name: "Santiago",
    surname: "Mosquera",
    address: {
      city: "Quito",
      principalStreet: "Tejar",
      secondaryStreet: "Cerro Narrio",
      code: "N-96",
    },
  },
  items: [
    {
      id: 100,
      product: {
        id: 500,
        name: "Papas Ruffles",
        price: 0.50,
        description: "Las papas más sabrosonas",
        category: categorySnacks,
      },
      quantity: 23,
    },
    {
      id: 101,
      product: {
        id: 550,
        name: "Doritos",
        price: 0.60,
        description: "De queso",
        category: categorySnacks,
      },
      quantity: 50,
    },
    {
      id: 102,
      product: {
        id: 580,
        name: "Kchitos",
        price: 0.30,
        description: "Para Kchudos",
        category: categorySnacks,
      },
      quantity: 100,
    },
  ],
};