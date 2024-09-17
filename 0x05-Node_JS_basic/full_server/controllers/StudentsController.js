import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const database = process.argv[2];
    readDatabase(database)
      .then((data) => {
        let message = 'This is the list of our students\n';

        const orderedFields = Object.keys(data).sort((a, b) => (
          a.toLowerCase().localeCompare(b.toLowerCase())
        )).reduce((obj, key) => {
          const newObj = obj;
          newObj[key] = data[key];
          return newObj;
        }, {});

        Object.entries(orderedFields).forEach(([field, students]) => {
          message += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        });

        response.status(200).send(message.trim());
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (!(['CS', 'SWE'].includes(major.trim()))) {
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE');
      return;
    }

    const database = process.argv[2];
    readDatabase(database)
      .then((data) => {
        response.send(`List: ${data[major].join(', ')}`);
      })
      .catch(() => {
        response.statusCode = 500;
        response.send('Cannot load the database');
      });
  }
}

export default StudentsController;
