import React, { useState } from 'react';
import { auth } from '../components/firebase';
import { useDispatch } from 'react-redux';
import { signin } from '../features/userSlice';
import { useHistory } from 'react-router';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  /* ----------------------------- login function ----------------------------- */
  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        // send data of user to redux
        dispatch(
          signin({
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
            email: userAuth.user.email,
            uid: userAuth.user.uid,
          })
        );
      })
      .then(() => history.push('/main'))
      .catch((err) => alert(err.message));
  };
  /* -------------------------------------------------------------------------- */

  return (
    <div className="auth">
      <img
        src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png"
        alt=""
      />

      <div className="auth__section">
        <div className="auth__form">
          <h1> Sign in </h1>
          <p>Stay updated on your professional world</p>
          <form action="#" onSubmit={loginToApp}>
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
            />

            <button type="submit">Sign in</button>
          </form>
        </div>

        <p className="auth__register">
          New to linkedin?
          <span onClick={() => history.push('/signup')}>Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
