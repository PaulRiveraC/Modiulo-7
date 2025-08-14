import { Course } from "../models/course";

const students = [];
for (let i = 1; i <= 100; i++) {
  students.push({
    id: i,
    identification: 1000000000 + i,
    name: `Estudiante ${i}`,
    surname: "Apellido",
  });
}

export const COURSE_DATA: Course = {
  id: 1, 
  name: "Curso Avanzado de Angular",
  students: students,
};