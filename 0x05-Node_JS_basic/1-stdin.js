/**
 * This script prompts the user for their name, reads input from STDIN,
 * and outputs a message including the provided name.
 *
 * Once the user ends the input stream, a farewell message is printed.
 *
 * @example
 * // Output:
 * // Welcome ALX, what is your name?
 * // Bob
 * // Your name is: Bob
 */
process.stdout.write('Welcome ALX, what is your name?\n');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
