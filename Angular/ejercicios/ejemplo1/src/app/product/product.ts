import { Component } from '@angular/core';

// Decorador del componente, define su selector, plantilla y estilos.
@Component({
  selector: 'app-product', // El nombre de la etiqueta HTML para usar este componente.
  standalone: true,
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class ProductComponent {
  // Atributos del producto con sus tipos y valores iniciales.
  // Esto hace que las propiedades 'id', 'name' y 'price' estén disponibles en la plantilla.
  id: number = 100;
  name: string = 'papitas fritas';
  price: number = 0.40;
}