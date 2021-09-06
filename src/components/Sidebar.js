import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './Sidebar.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Sidebar = () => {
  const [showSidebarBottom, setShowSidebarBottom] = useState(false);
  const user = useSelector(selectUser);
  const { displayName, photoUrl, email } = user;

  const sidebarBottomClasses = showSidebarBottom
    ? 'sidebar__bottom'
    : 'sidebar__bottom hide';

  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      {/* sidebar top */}
      <div className="sidebar__top">
        <img
          src="https://image.freepik.com/free-vector/ditsy-pattern-small-flower-background_23-2148400587.jpg"
          alt=""
        />

        {photoUrl && <Avatar alt="person photo" src={photoUrl}></Avatar>}
        {!photoUrl && <Avatar alt="person photo"> {email[0]}</Avatar>}

        <h2>{displayName}</h2>
        <p>{email}</p>
      </div>

      {/* sidebar stats */}
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statnumber">2.543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statnumber">2.448</p>
        </div>
      </div>

      {/* sidebar bottom  */}
      <div className={sidebarBottomClasses}>
        <h4>Recent</h4>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareenginnering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>

      <div
        className="showSidebar__bottom"
        onClick={() => setShowSidebarBottom((prevState) => !prevState)}
      >
        {!showSidebarBottom && (
          <>
            <span>Show more</span>
            <KeyboardArrowDownIcon />
          </>
        )}

        {showSidebarBottom && (
          <>
            <span>Show less</span>
            <ExpandLessIcon />
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
