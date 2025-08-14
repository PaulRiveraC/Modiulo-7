import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { ProductComponent } from './product/product';

@Component({
  selector: 'root',
  imports: [RouterOutlet, User, ProductComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title:string = 'ejemplo1';
  author:string ="Paul Rivera";
}
