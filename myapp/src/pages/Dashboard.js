import React , { useState, useEffect } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import LineChart from '../Components/LineChart';
import Dropdown from 'react-bootstrap/Dropdown';
import { WiDaySunny } from "react-icons/wi";
import { FaWind } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FaCloud } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import PieChart from '../Components/PieChart';
import axios from 'axios';



const Dashboard = () => {
  const [data, setData] = useState(null);
  const [apiKey, setApiKey] = useState('lat=44.34&lon=10.99');

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?${apiKey}&appid=5b41cb56e5c0fa510a161726514c5cf3`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log('Error fetching data: ', error);
      });
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

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
        <Dropdown.Item value ='lat=44.34&lon=10.99'>London</Dropdown.Item>
        <Dropdown.Item >Paris</Dropdown.Item>
        <Dropdown.Item >Fiji</Dropdown.Item>
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
            <h5>Discover the latest weather forecasts at Our Website. With our user-friendly interface and reliable API, you'll always know what to expect, rain or shine. Plan your day with confidence</h5>
            <br />
            <h5>Why not spice up your day by checking out the compare page and having a blast comparing the weather of different cities?</h5>
          </div>
          <div className='btn-container'>
          <Link to="/comparing">
          <Button className='btn-1'>COMPARE</Button>{' '}
          </Link>
          </div>
        </div>
        <div className="div2">
          <h5 className='chart-info'>Temperature For New York</h5>
          <div className='LineChart'>
          <LineChart />
          </div>
        </div>
        <div className="div3">
          <div className='title-city'>
            <h2>New York</h2>
            <h3>Weather report:</h3>
            </div>
            <div className='climate-info'>
            <h2>sunny</h2>
              <div className='climate'>
                <h2>32 C</h2>
                <h1><WiDaySunny /></h1>
              </div>
              <div className='climate-icons'>
               <div className='wind'>
               <h1><FaWind /></h1>
               <h4>4 MPH</h4>
               <h5>North</h5>
               </div>

               <div className='humidity'>
               <h1><WiHumidity /></h1>
               <h4>Humidity</h4>
               <h5>28 g/kg</h5>
                </div>

              <div className='wind'>
               <h1><FaCloud /></h1>
               <h4>Wind Change</h4>
               <h5>25%</h5>
              </div>
              </div>
            </div> 
            <h5 className='chart-info'>Weather Report in New York:</h5>
          <div className='PieChart'>
          <PieChart />
          </div>
        </div>
        </div>
      </div>
      </div>
      
      </div>
  );
};

export default Dashboard;

