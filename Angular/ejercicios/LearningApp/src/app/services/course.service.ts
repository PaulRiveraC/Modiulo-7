import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { COURSE_DATA } from '../data/course.data';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private course: Course = COURSE_DATA[0];

  constructor() { }

  getCourse(): Course {
    return this.course;
  }
}