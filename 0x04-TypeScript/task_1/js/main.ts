/**
 * Represents a teacher.
 */
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  // Additional properties of the teacher.
  [propName: string]: any;
}

/**
 * Represents a teacher object.
 * @property {string} firstName - The first name of the teacher.
 * @property {string} lastName - The last name of the teacher.
 * @property {boolean} fullTimeEmployee - Indicates if the teacher is a full-time employee.
 * @property {string} location - The location of the teacher.
 * @property {number} [yearsOfExperience] - The number of years of experience of the teacher (optional).
 * @property {any} [propName] - Additional properties of the teacher.
 */

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

/**
 * Represents a director who is also a teacher.
 */
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

/**
 * Represents a function that prints the teacher's name.
 * @param {string} firstName - The first name of the teacher.
 * @param {string} lastName - The last name of the teacher.
 * @returns {string} The formatted name of the teacher.
 */
const printTeacher: PrintTeacherFunction = function (firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

console.log(printTeacher("John", "Doe"));

/**
 * Represents a StudentClass constructor.
 */
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

/**
 * Represents a student.
 */
class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }

}

const createStudent: StudentConstructor = StudentClass;

const student = new createStudent('Mohammad', 'Ali');
console.log(student.displayName());
