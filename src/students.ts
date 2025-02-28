interface Student {
  id: number;
  name: string;
  courses: string[];
}

/**
 * You can use this array
 * to manually test your code
 */
const students: Student[] = [
  {
    id: 1,
    name: "Alice",
    courses: ["Math", "Science", "History"],
  },
  {
    id: 2,
    name: "Bob",
    courses: ["History", "English", "Math", "Art"],
  },
  {
    id: 3,
    name: "Charlie",
    courses: ["Science", "English", "Music"],
  },
  {
    id: 4,
    name: "David",
    courses: ["Math", "History", "Art", "PE"],
  },
  {
    id: 5,
    name: "Eva",
    courses: ["Science", "Math", "Music"],
  },
  {
    id: 6,
    name: "Frank",
    courses: ["English", "Art"],
  },
  {
    id: 7,
    name: "Grace",
    courses: ["Math", "Science", "English", "Music"],
  },
  {
    id: 8,
    name: "Helen",
    courses: ["History", "Art", "PE"],
  },
  {
    id: 9,
    name: "Ivy",
    courses: ["Science", "English", "Art"],
  },
  {
    id: 10,
    name: "Jack",
    courses: ["Math", "History", "Music"],
  },
];

// 1) Write a `getStudentName` function that accepts an argument of `student` object, return the student name
function getStudentName(student: Student): string {
  // write your code here...
  return "";
}
// console.log(getStudentName(students[0]))

// 2) Write a `getCourse` function that accepts a `student` object and `courseIndex` return the course at the specified course index in the student's courses array
function getCourse(student: Student, courseIndex: number): string {
  // write your code here...
  return "";
}
// console.log(getCourse(students[4], 2)); // Outputs: Music

// 3) Write a `addCourseToStudent` function that accepts a `student` object and `course` string,
// it will add the course to the student's courses array and return the `student` object
function addCourseToStudent(student: Student, course: string): Student {
  // write your code here...
  return students[0];
}
// console.log(addCourseToStudent(students[7], "Physics"));

// 4) Write a `countCourses` function that accepts a `student` object
// then returns the number of courses the student is enrolled in
function countCourses(student: Student): number {
  // write your code here...
  return Infinity;
}
// console.log(countCourses(students[1])); // Outputs: 4

// 5) Write a `removeCourseFromStudent` function that accepts a `student` object and `course` string,
// removes the `course` from the student's courses array,
// then returns the `student` object.
function removeCourseFromStudent(student: Student, course: string): Student {
  // write your code here...
  return students[0];
}
// console.log(removeCourseFromStudent(students[6], "Science"));

// 6) Write a `findStudentById` function that accepts a `studentId` and an array of student objects `students`
// and returns the student object with the matching id.
// It should return undefinded if a student is not found
function findStudentById(students: Student[], studentId: number) {
  // write your code here...
  return students[0];
}
// console.log(findStudentById(students, 10));

export {
  Student,
  getStudentName,
  getCourse,
  addCourseToStudent,
  countCourses,
  removeCourseFromStudent,
  findStudentById,
};
