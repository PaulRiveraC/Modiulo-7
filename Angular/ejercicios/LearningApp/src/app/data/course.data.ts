import { Course } from "../models/course";

export const COURSE_DATA: Course[] = [
  {
    id: 1, 
    name: "Introducción a Angular",
    students: [
      { id: 101, identification: 1111111111, name: "Juan", surname: "Perez" },
      { id: 102, identification: 2222222222, name: "Maria", surname: "Lopez" },
      { id: 103, identification: 3333333333, name: "Pedro", surname: "Gomez" },
      { id: 104, identification: 4444444444, name: "Ana", surname: "Rodriguez" },
      { id: 105, identification: 5555555555, name: "Luis", surname: "Diaz" },
    ],
  },
  {
    id: 2, 
    name: "Programación en TypeScript",
    students: [
      { id: 201, identification: 6666666666, name: "Sofía", surname: "Torres" },
      { id: 202, identification: 7777777777, name: "Carlos", surname: "Sánchez" },
      { id: 203, identification: 8888888888, name: "Laura", surname: "Hernández" },
      { id: 204, identification: 9999999999, name: "Daniel", surname: "Ramírez" },
      { id: 205, identification: 1010101010, name: "Elena", surname: "Vásquez" },
    ],
  },
  {
    id: 3, 
    name: "Desarrollo con Material Design",
    students: [
      { id: 301, identification: 1212121212, name: "Gabriela", surname: "Castillo" },
      { id: 302, identification: 1313131313, name: "Miguel", surname: "Ruiz" },
      { id: 303, identification: 1414141414, name: "Carolina", surname: "Mendoza" },
      { id: 304, identification: 1515151515, name: "Andrés", surname: "Guerrero" },
      { id: 305, identification: 1616161616, name: "Valentina", surname: "Salazar" },
    ],
  },
];