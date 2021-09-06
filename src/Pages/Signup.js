import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { auth } from '../components/firebase';
import { signup } from '../features/userSlice';
import './Auth.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
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
          .then(() => {
            dispatch(
              signup({
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL,
                email: userAuth.user.email,
                uid: userAuth.user.uid,
              })
            );
          })
          .then(() => history.push('/main'));
      })

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
          <h1> Sign up </h1>
          <p>Stay updated on your professional world</p>
          <form action="#" onSubmit={register}>
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

            <button type="submit">Sign up</button>
          </form>
        </div>

        <p className="auth__register">
          Already have account?
          <span onClick={() => history.push('/signin')}>Sign in</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
