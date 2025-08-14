import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learning.html',
  styleUrl: './learning.css'
})
export class Learning implements OnInit {

  course!: Course;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.course = this.courseService.getCourse();
  }
}