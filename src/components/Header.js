import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import WorkIcon from '@material-ui/icons/Work';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from './firebase';
import { useHistory } from 'react-router';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutOfApp = () => {
    // delete user form redux
    dispatch(logout());
    // sign out from auth of firebase
    auth.signOut().then(() => history.push('/signin'));
    // push to signin page
  };

  return (
    <nav className="header">
      <div className="container">
        {/* header left */}
        <div className="header__left">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt=""
          />

          <div className="header__search">
            <SearchIcon className="searchIcon" />
            <input type="text" placeholder="Search" />
          </div>
        </div>

        {/* header right  */}

        <div className="header__right">
          <HeaderOption
            Icon={SearchIcon}
            title="Search"
            className="searchOption"
          />
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={WorkIcon} title="Jobs" />
          <HeaderOption Icon={MessageIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />

          <HeaderOption avatar={true} title="Me" onClick={logoutOfApp} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
