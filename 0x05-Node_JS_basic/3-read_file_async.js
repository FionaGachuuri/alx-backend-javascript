const fs = require('fs').promises;

function getStudents(data) {
  const lines = data.split('\n');
  const students = [];
  for (let i = 1; i < lines.length; i += 1) {
    if (lines[i] !== '') {
      students.push(lines[i]);
    }
  }
  return students;
}

function countFields(students) {
  const fields = {};
  let info; let name; let field;
  students.forEach((student) => {
    [name, ...info] = student.split(',');
    field = info[info.length - 1];
    if (!(field in fields)) {
      fields[field] = [];
    }
    fields[field].push(name);
  });
  return fields;
}

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, { encoding: 'utf-8' });
    const students = getStudents(data);
    console.log(`Number of students: ${students.length}`);
    const fields = countFields(students);
    let message;
    Object.keys(fields).forEach((field) => {
      message = `Number of students in ${field}: ${fields[field].length}. `;
      message += `List: ${fields[field].join(', ')}`;
      console.log(message);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
