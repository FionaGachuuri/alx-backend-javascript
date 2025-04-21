export default function getResponseFromAPI() {
  return new Promise(() => {
    // The promise constructor takes a function with two arguments: resolve and reject
    // The function should call either resolve or reject to indicate success or failure
    // In this case, we are not resolving or rejecting the promise, so it will remain pending
  });
}
