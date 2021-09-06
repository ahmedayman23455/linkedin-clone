import React, { useState } from 'react';
import './HeaderOption.css';
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const HeaderOption = ({ Icon, avatar, title, onClick, className }) => {
  const user = useSelector(selectUser);
  const showAvatar = avatar && user.photoUrl;
  const [activeSignout, setActiveSignOut] = useState(false);

  const toggleSignout = (title) => {
    setActiveSignOut((prevstate) => !prevstate);
  };

  return (
    <div
      className={`${className} headerOption`}
      onClick={() => {
        if (title === 'Me') {
          toggleSignout(title);
        }
      }}
    >
      {Icon && <Icon className="headerOption__icon" />}

      {showAvatar && user.photoUrl && (
        <Avatar
          alt="person photo"
          className="headerOption__icon"
          src={user.photoUrl}
        ></Avatar>
      )}
      {avatar && !showAvatar && (
        <Avatar alt="person photo" className="headerOption__icon">
          {user.email[0]}
        </Avatar>
      )}

      {title === 'Me' && (
        <p className="headerOption__title">
          <span>Me</span> <ArrowDropDownIcon />
        </p>
      )}
      {title !== 'Me' && <p className="headerOption__title">{title}</p>}

      {activeSignout && (
        <p className="headerOption__signout" onClick={onClick}>
          Signout
        </p>
      )}
    </div>
  );
};

export default HeaderOption;
