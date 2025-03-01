// don't change this interface
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

/**
 * `getStudentName` function:
 * - Accepts a `student` parameter of type `Student`.
 * - Returns the student's name.
 * Example:
 *  getStudentName(students[0]); // => "Alice"
 */
function getStudentName(student: Student): string {
  // write your code here...

  return ""; // replace empty string with what you see is fit
}

/**
 * `getCourse` function:
 * - Accepts:
 *   - A `student` parameter of type `Student`.
 *   - A `courseIndex` parameter of type `number`.
 * - Returns the course at the specified index in the student's `courses` array.
 * Example:
 *  getCourse(students[4], 2); // => "Music"
 */
function getCourse(student: Student, courseIndex: number): string {
  // write your code here...

  return ""; // replace empty string with what you see is fit
}

/**
 * `addCourseToStudent` function:
 * - Accepts:
 *   - A `student` parameter of type `Student`.
 *   - A `course` parameter of type `string`.
 * - Adds the new course to the student's `courses` array.
 * - Returns the updated student object.
 * Example:
 *  addCourseToStudent(students[7], "Physics");
 *    // => { id: 8, name: "Helen", courses: ["History", "Art", "PE", "Physics"] }
 */
function addCourseToStudent(student: Student, course: string): Student {
  // write your code here...

  return student;
}

/**
 * `countCourses` function:
 * - Accepts a `student` parameter of type `Student`.
 * - Returns the number of courses the student is enrolled in.
 * Example:
 *  countCourses(students[1]); // => 4
 */
function countCourses(student: Student): number {
  // write your code here...

  return -1; // replace -1 with what you see is fit
}

/**
 * `removeCourseFromStudent` function:
 * - Accepts:
 *   - A `student` parameter of type `Student`.
 *   - A `course` parameter of type `string`.
 * - Removes the course from the student's `courses` array.
 * - Returns the updated student object.
 * Example:
 *  removeCourseFromStudent(students[6], "Science");
 *    // => { id: 7, name: "Grace", courses: ["Math", "English", "Music"] }
 */
function removeCourseFromStudent(student: Student, course: string): Student {
  // write your code here...

  return student;
}

/**
 * `findStudentById` function:
 * - Accepts:
 *   - A `students` array of type `Student[]`.
 *   - A `studentId` parameter of type `number`.
 * - Searches for a student by ID in the `students` array.
 * - Returns the student object if found, otherwise returns `undefined`.
 * Example:
 *  - findStudentById(students, 10);
 *      // => { id: 10, name: "Jack", courses: ["Math", "History", "Music"] }
 *  - findStudentById(students, 29);
 *      // => undefined
 */
function findStudentById(
  students: Student[],
  studentId: number
): Student | undefined {
  // write your code here...

  return undefined; // replace undefined with what you see is fit
}

export {
  Student,
  getStudentName,
  getCourse,
  addCourseToStudent,
  countCourses,
  removeCourseFromStudent,
  findStudentById,
};
