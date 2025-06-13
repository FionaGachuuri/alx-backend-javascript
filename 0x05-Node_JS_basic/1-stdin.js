/**
 * This script prompts the user for their name, reads input from STDIN,
 * and outputs a message including the provided name.
 *
 * Once the user ends the input stream, a farewell message is printed.
 *
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  const name = data.trim();
  console.log(`Your name is: ${name}`);
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
