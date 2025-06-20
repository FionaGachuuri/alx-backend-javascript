/**
 * This script prompts the user for their name, reads input from STDIN,
 * and outputs a message including the provided name.
 *
 * Once the user ends the input stream, a farewell message is printed.
 *
 */
process.stdin.setEncoding('utf-8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
