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
  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?${apiKey}&appid=5b41cb56e5c0fa510a161726514c5cf3`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log('Error fetching data: ', error);
      });
  }, [apiKey]);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  if(!data){
    return <h2>loading</h2>
  }
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
      <Dropdown.Item onClick={() => setApiKey('lat=51.51&lon=-0.13')} href="#/action-1">London</Dropdown.Item> 
        <Dropdown.Item onClick={() => setApiKey('lat=48.85&lon=2.35')} href="#/action-2">Paris</Dropdown.Item> 
        <Dropdown.Item onClick={() => setApiKey('lat=-17.78&lon=177.43')} href="#/action-3">Fiji</Dropdown.Item> 
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
          <h5 className='chart-info'>Temperature For {data.city.name}</h5>
          <div className='LineChart'>
          <LineChart data = {data}/>
          </div>
        </div>
        <div className="div3">
          <div className='title-city'>
            <h2>{data.city.name}</h2>
            <h5>Weather report:</h5>
            </div>
            <div className='climate-info'>
            <h2>{data.list[0].weather[0].main}</h2>
            <h5>Temperature:</h5>
              <div className='climate'>
                <h2>{kelvinToCelsius(data.list[0].main.temp).toFixed(1)} °C</h2>
              </div>
              <div className='climate-icons'>
               <div className='wind'>
               <h1><FaWind /></h1>
               <h4>Wind</h4>
              <h5>{data.list[0].wind.speed} MP/H</h5>
               </div>

               <div className='humidity'>
               <h1><WiHumidity /></h1>
               <h4>Humidity</h4>
               <h5>{data.list[0].main.humidity} g/kg</h5>
                </div>

              <div className='wind'>
               <h1><FaCloud /></h1>
               <h4>Cloudy Change</h4>
               <h5>{data.list[0].clouds.all} %</h5>
              </div>
              </div>
            </div> 
            <h5 className='chart-info'>Weather Report in {data.city.name}:</h5>
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

