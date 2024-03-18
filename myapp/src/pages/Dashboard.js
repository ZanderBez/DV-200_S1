import React from 'react';
import './Dashboard.css';
import LineChart from '../Components/LineChart';
import Dropdown from 'react-bootstrap/Dropdown';



const Dashboard = () => {
  return (
    <div className='dashboard-container '>
        <div className='navbar-spacer'></div>
        <div className='dashboard-content'>
      <div className='title-container'>
        <div className='title'>
        <h1>This is the Dashboard</h1>
      </div>
      <Dropdown className='drop'>
      <Dropdown.Toggle  id="dropdown-basic">
        New York
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">London</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Paris</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Fiji</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </div>
      <div className='info-container'>
      <div className="parent">
        <div className="div1">
        <div className='weather-title'>
            <h3>WELCOME</h3>
          </div>
          <div className='weather-text'>
            <h5>Discover the latest weather forecasts at Our Website. With our user-friendly interface and reliable API, you'll always know what to expect, rain or shine. Plan your day with confidence  visit us now</h5>
          </div>
        </div>
        <div className="div2">
          <h5 className='chart-info'>Temperature For New York</h5>
          <div className='LineChart'>
          <LineChart />
          </div>
        </div>
        <div className="div3">
        </div>
        </div>
      </div>
      </div>
      
      </div>
  );
};

export default Dashboard;

