import React, { useState, useEffect } from 'react';
import './Auth.css';
import 'firebase/auth';
import { auth, db } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { selectShowSignUp } from '../features/userSlice';
import { login, showSignUpPage, hideSignUpPage } from '../features/userSlice';

const Auth = () => {
  const [name, setName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const showSignUp = useSelector(selectShowSignUp);
  /* ----------------------------- login function ----------------------------- */
  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        // send data of user to redux
        dispatch(
          login({
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
            email: userAuth.user.email,
            uid: userAuth.user.uid,
          })
        );
      })
      .catch((err) => alert(err.message));
  };
  /* ---------------------------- register function --------------------------- */
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: photoUrl,
          })
          .then(() => alert('sign up procss completed.go to signin✅'));
      })

      .catch((err) => alert(err.message));
  };

  return (
    <div className="auth">
      <img
        src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png"
        alt=""
      />

      <div className="auth__section">
        <div className="auth__form">
          <h1> {showSignUp ? 'Sign up' : 'Sign in'}</h1>
          <p>Stay updated on your professional world</p>
          <form action="#" onSubmit={showSignUp ? register : loginToApp}>
            {showSignUp && (
              <>
                <input
                  type="text"
                  placeholder="Full Name (required)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Photo url (optional)"
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                />
              </>
            )}

            <input
              type="text"
              placeholder="Email (required)"
              onChange={(e) => setEmail(e.target.value)}
              required
              value={email}
            />

            <input
              type="password"
              placeholder="Password (required)"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            {!showSignUp && <button type="submit">Sign in</button>}
            {showSignUp && <button type="submit">Sign up</button>}
          </form>
        </div>
        {!showSignUp && (
          <p className="auth__register">
            New to linkedin?
            <span onClick={() => dispatch(showSignUpPage())}>Join now</span>
          </p>
        )}
        {showSignUp && (
          <p className="auth__register">
            Already have account?
            <span onClick={() => dispatch(hideSignUpPage())}>Sign in</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Auth;

// useEffect(() => {
//   db.collection('users').onSnapshot((snapshot) => {
//     setUsers(
//       snapshot.docs.map((doc) => {
//         return {
//           id: doc.id,
//           data: doc.data(),
//         };
//       })
//     );
//   });
// }, []);

/* -------------------------------------------------------------------------- */
// search the username of email
// const activeUser = users.find((user) => user.data.email === email);
// handle if not exist email
// if (!activeUser) {
//   alert('Email is not found');
//   return;
// }
// const nameOfEmail = activeUser.data.displayName;
// const photoOfEmail = activeUser.data.photoURL;

/* -------------------------------------------------------------------------- */
// .then(() => {
//   // send information of user in firestore
//   db.collection('users').add({
//     displayName: name,
//     email: email,
//     photoURL: photoUrl,
//   });
// })
