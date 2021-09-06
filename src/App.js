import React, { useEffect } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import Main from './Pages/Main';
import { useDispatch } from 'react-redux';
import { auth } from './components/firebase';
import { selectIsLoggedin } from './features/userSlice';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { signin, logout } from './features/userSlice';

function App() {
  const dispatch = useDispatch();
  const isLoggedin = useSelector(selectIsLoggedin);
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          signin({
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
            email: userAuth.email,
            uid: userAuth.uid,
          })
        );
        history.push('/main');
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch, history]);
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          {isLoggedin && <Redirect to="/main" />}
          {!isLoggedin && <Redirect to="/signin" />}
        </Route>

        {isLoggedin && (
          <Route path="/main">
            <Main />
          </Route>
        )}

        <Route path="/signup" exact component={Signup} />

        <Route path="/signin" exact component={Signin} />

        <Route path="*">
          {isLoggedin && <Redirect to="/main" />}
          {!isLoggedin && <Redirect to="/signin" />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
