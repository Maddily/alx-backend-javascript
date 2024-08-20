const { createServer } = require('http');
const fs = require('fs/promises');

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

const hostname = '127.0.0.1';
const port = 1245;

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    const path = process.argv[2];

    countStudents(path)
      .then((data) => {
        res.write('This is the list of our students\n');
        res.end(data.slice(0, -1));
      })
      .catch(() => {
        res.statusCode = 404;
        res.end('Cannot load the database');
      });
  }
});

app.listen(port, hostname);

module.exports = app;
