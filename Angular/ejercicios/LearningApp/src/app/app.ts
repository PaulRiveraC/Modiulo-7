import { Component } from '@angular/core';
import { Learning } from './learning/learning';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Learning],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'LearningApp';
}