import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const users = [
  {
    id: 1,
    firstName: 'Brandon',
    lastName: 'Clapp',
    userName: 'netyeti'
  },
  {
    id: 2,
    firstName: 'Alex',
    lastName: 'Purcell',
    userName: 'yaBoiBlanace'
  },
  {
    id: 1,
    firstName: 'Madison',
    lastName: 'Clapp',
    userName: 'Puma'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (user) => {
  return user.firstName.toLowerCase() + '-' + user.lastName.toLowerCase();
};

class UserApi {
  static getAllUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], users));
      }, delay);
    });
  }
}

export default UserApi;