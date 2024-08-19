const fs = require('node:fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const students = data.trim().split('\n').map((line) => line.split(','));
    students.shift();
    console.log(`Number of students: ${students.length}`);

    const fields = students.reduce((acc, student) => {
      const field = student[3];
      if (!acc[field]) {
        acc[field] = { count: 0, names: [] };
      }
      acc[field].count += 1;
      acc[field].names.push(student[0]);
      return acc;
    }, {});

    Object.entries(fields).forEach(([field, info]) => {
      console.log(`Number of students in ${field}: ${info.count}. List: ${info.names.join(', ')}`);
    });
  } catch (error) {
    console.error('Cannot load the database');
  }
}

countStudents('./database.csv');
