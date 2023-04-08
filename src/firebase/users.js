import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './config';

export async function createUser(mail, password) {
  console.log(mail);
  console.log(password);
  createUserWithEmailAndPassword(auth, mail, password)
    .then((userCredential) => {
      // Signed in
      console.log("createUser");
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export async function loginUser(mail, password) {
  console.log(mail);
  console.log(password);
  signInWithEmailAndPassword(auth, mail, password)
    .then((userCredential) => {
      // Signed in
      console.log("loginUser");
      const user = userCredential.user;
      console.log(user);
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
