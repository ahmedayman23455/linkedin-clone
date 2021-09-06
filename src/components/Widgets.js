import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import InfoIcon from '@material-ui/icons/Info';
import './Widgets.css';
const Widgets = () => {
  const article = (title, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets__articleRight">
          <h5>{title}</h5>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h4>Linkedin news</h4>
        <InfoIcon />
      </div>
      <div className="widgets__articles">
        {article('Coronaviruses:UK updates', 'Top news 931 readers')}
        {article('Firebase update', 'version 9.0.0')}
        {article('Tesla hits new highs', 'Top news 8951 readers')}
        {article(
          'differece between primitive and reference',
          'Top news 3600 readers'
        )}
        {article('Redux Vs ContextApi', 'Top news 450 readers')}
      </div>
    </div>
  );
};

export default Widgets;
