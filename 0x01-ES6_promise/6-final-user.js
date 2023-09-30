/*import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  return Promise.allSettled(promises)
    .then(results => results.map(result => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason.message,
    })));
}

export default handleProfileSignup;
*/
import handleProfileSignup from './path/to/module.js';

handleProfileSignup('John', 'Doe', 'example.jpg')
  .then(results => console.log(results))
  .catch(error => console.error(error.message));
