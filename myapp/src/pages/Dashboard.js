import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div>
      <div className='title'>
        <h1>This is the Dashboard</h1>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='weather-name'>
            <h2>New York</h2>
            <div className='block1'></div>
          </div>
        </div>
        <div className='col'>
          <div className='weather-graph'>
          <h2>Graph</h2>
            <div className='block2'>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

