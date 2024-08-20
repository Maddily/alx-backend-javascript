import { readFile } from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
        return;
      }

      const students = data.trim().split('\n').map((line) => line.split(','));
      students.shift();

      const fields = students.reduce((acc, student) => {
        const field = student[3];
        if (!acc[field]) {
          acc[field] = [];
        }
        acc[field].push(student[0]);
        return acc;
      }, {});

      resolve(fields);
    });
  });
}

export default readDatabase;
