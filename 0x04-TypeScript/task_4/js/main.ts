/// <reference path='subjects/Teacher.ts' />
/// <reference path='subjects/Subject.ts' />
/// <reference path='subjects/Cpp.ts' />
/// <reference path='subjects/React.ts' />
/// <reference path='subjects/Java.ts' />

import { Subjects } from './subjects/Cpp';

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
  firstName: 'Mohammad',
  lastName: 'Naser',
  experienceTeachingC: 10
};

// Cpp
console.log('C++');
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java
console.log('Java');
java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React
console.log('React');
react.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
