import React from 'react';
import Header from '../components/Header';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';

const Main = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      </div>
    </>
  );
};

export default Main;
