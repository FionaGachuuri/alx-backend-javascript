const fs = require('fs');

/**
 * Asynchronously counts students from a CSV data file.
 * 
 * Reads the file, parses its content, and logs the total number of students,
 * as well as grouped counts by field with a list of first names.
 *
 * @param {String} dataPath - The path to the CSV data file.
 * @returns {Promise<Boolean>} Resolves to true if successful.
 * @throws {Error} If the database file cannot be read.
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
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const fileLines = data
        .toString('utf-8')
        .trim()
        .split('\n');
      const studentGroups = {};
      const dbFieldNames = fileLines[0].split(',');
      const studentPropNames = dbFieldNames
        .slice(0, dbFieldNames.length - 1);

      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord
          .slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];
        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }
        const studentEntries = studentPropNames
          .map((propName, idx) => [propName, studentPropValues[idx]]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      const totalStudents = Object
        .values(studentGroups)
        .reduce((pre, cur) => (pre || []).length + cur.length);
      console.log(`Number of students: ${totalStudents}`);
      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;
