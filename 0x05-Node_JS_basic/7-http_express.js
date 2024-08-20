const express = require('express');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
        return;
      }

      const students = data.trim().split('\n').map((line) => line.split(','));
      students.shift();

      let studentData = `Number of students: ${students.length}\n`;

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
        studentData += `Number of students in ${field}: ${info.count}. List: ${info.names.join(', ')}\n`;
      });

      resolve(studentData);
    });
  });
}

const app = express();
const port = 1245;
const path = process.argv[2];

app.get('/', (req, res) => res.send('Hello Holberton School!'));
app.get('/students', (req, res) => {
  countStudents(path)
    .then((data) => {
      res.send(`This is the list of our students\n${data.slice(0, -1)}`);
    })
    .catch(() => {
      res.statusCode = 404;
      res.send('Cannot load the database');
    });
});

app.listen(port);

module.exports = app;
