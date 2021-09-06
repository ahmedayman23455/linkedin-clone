import React from 'react';
import './FeedOption.css';

const FeedOption = ({ Icon, title, color }) => {
  return (
    <div className="feed__option">
      <Icon style={{ color: color, fontSize: '1.3rem' }} />
      <p>{title}</p>
    </div>
  );
};

export default FeedOption;
