const express = require('express');
const fs = require('node:fs/promises');

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, { encoding: 'utf8' });

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

    return studentData;
  } catch (error) {
    throw Error('Cannot load the database');
  }
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
