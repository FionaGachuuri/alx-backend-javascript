/* eslint-disable no-param-reassign */
const fs = require('fs');

/**
 * Reads a CSV data file and prints the total number of students,
 * as well as the number of students per field along with their first names.
 *
 * @param {String} dataPath - The path to the CSV file containing student data.
 * @throws {Error} If the file cannot be read or does not exist.
 *
 * @example
 * // CSV content:
 * // firstname,lastname,age,field
 * // John,Doe,25,CS
 * // Jane,Smith,22,Math
 * // Output:
 * // Number of students: 2
 * // Number of students in CS: 1. List: John
 * // Number of students in Math: 1. List: Jane
 */
const countStudents = (dataPath) => {
  if (!fs.existsSync(dataPath) || !fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }

  const fileLines = fs.readFileSync(dataPath, 'utf-8').trim().split('\n');
  const dbFieldNames = fileLines.shift().split(',');
  const studentPropNames = dbFieldNames.slice(0, -1);

  const studentGroups = fileLines.reduce((groups, line) => {
    const studentRecord = line.split(',');
    const studentPropValues = studentRecord.slice(0, -1);
    const field = studentRecord[studentRecord.length - 1];
    groups[field] = groups[field] || [];
    groups[field].push(Object.fromEntries(studentPropNames.map((propName, idx) => [propName, studentPropValues[idx]])));
    return groups;
  }, {});

  const totalStudents = Object.values(studentGroups).reduce((pre, cur) => pre + cur.length, 0);
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
