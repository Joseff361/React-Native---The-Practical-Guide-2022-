import axios from 'axios';

const API_KEY = 'AIzaSyAkfI4tjacvtcollQuFBK8Xcd6QgfoqJvY';

async function authenticate(mode, email, password) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true,
    },
  );

  const { idToken: token } = response.data;

  return token;
}

export function createUser(email, password) {
  // return the promise
  return authenticate('signUp', email, password);
}

export function login(email, password) {
  return authenticate('signInWithPassword', email, password);
}
