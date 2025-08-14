import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../models/student';

@Component({
  selector: 'app-student-list', 
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.html',
})
export class StudentList {

  @Input() students!: Student[];
}