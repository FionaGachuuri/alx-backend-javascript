import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  // Call the uploadPhoto function to upload the user's photo then
  // chain all promises together and handle with an error statement
  return Promise
    .all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      // If the user was successfully created, log the body, firstName, and lastName to the console
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      // In the event of an error, log Signup system offline to the console
      console.log('Signup system offline');
    });
}
