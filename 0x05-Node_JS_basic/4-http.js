const http = require('http');

/**
 * Creates an HTTP server that responds with "Hello Holberton School!" to any request.
 * @module 4-http
 */

/**
 * Handles incoming HTTP requests by responding with a plain text greeting.
 *
 * @param {http.IncomingMessage} req - The incoming request object.
 * @param {http.ServerResponse} res - The response object used to send data back to the client.
 */
const handleRequest = (req, res) => {
  // Set response status code to 200 (OK) and content type to plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send the response body
  res.end('Hello Holberton School!');
};

// Create the HTTP server using the request handler
const app = http.createServer(handleRequest);

// Start the server and listen on port 1245
app.listen(1245);

// Export the server instance
module.exports = app;
