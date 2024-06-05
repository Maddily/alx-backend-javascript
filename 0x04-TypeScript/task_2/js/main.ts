interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }

  getCoffeeBreak() {
    return 'Getting a coffee break';
  }

  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }

  getCoffeeBreak() {
    return 'Cannot have a break';
  }

  workTeacherTasks() {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string) : Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }

  return new Director();
}

// Test
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));


function isDirector(employee: any) : boolean {
  if (employee instanceof Director) return true;

  return false;
}

function executeWork(employee: Director | Teacher) : string {
  if (employee instanceof Director) {
    return employee.workDirectorTasks();
  } else if (employee instanceof Teacher) {
    return employee.workTeacherTasks();
  }
}

// Test
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));


type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects) : string {
  return (todayClass === 'Math') ? 'Teaching Math' : 'Teaching History';
}

// Test
console.log(teachClass('Math'));
console.log(teachClass('History'));
