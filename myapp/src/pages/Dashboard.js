import React from 'react';
import './Dashboard.css';
import LineChart from '../Components/LineChart';

const Dashboard = () => {
  return (
    <div className='dashboard-container '>
        <div className='navbar-spacer'></div>
        <div className='dashboard-content'>
      <div className='title-container'>
        <div className='title'>
        <h1>This is the Dashboard</h1>
      </div>
        <div className='title-info'>
        <h3>Discover the latest weather forecasts at Our Website. With our user-friendly interface and reliable API, you'll always know what to expect, rain or shine. Plan your day with confidence  visit us now</h3>
      </div>
      </div>
      <div className='info-container'>
      <div className="parent">
        <div className="div1"></div>
        <div className="div2"></div>
        <div className="div3"></div>
      </div>
      </div>
      
      </div>
    </div>
  );
};

export default Dashboard;

