import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaWind } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FaCloud } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import DoughnutChart from '../Components/DoughnutChart';
import axios from 'axios';
import BarChart from '../Components/LineChart';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [selectedCity, setSelectedCity] = useState('New York');
  const [apiKey, setApiKey] = useState('lat=40.7111506585508&lon=-74.00669153398084');
  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?${apiKey}&appid=5b41cb56e5c0fa510a161726514c5cf3`)
      .then(response => {
        setData(response.data);
        console.log(response.data);
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

  const handleCityClick = (cityName, apiCoordinates) => {
    setSelectedCity(cityName);
    setApiKey(apiCoordinates);
  };

  if (!data) {
    return <h1 className='load'>Loading...</h1>;
  }

  return (
    <div className='dashboard-container '>
      <div className='navbar-spacer'></div>
      <div className='dashboard-content'>
        <div className='title-container'>
          <div class="wrapper">
            <svg>
              <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                DASHBOARD
              </text>
            </svg>
          </div>
          <Dropdown className='drop'>
            <Dropdown.Toggle id="dropdown-basic">
              {selectedCity}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleCityClick('New York', 'lat=40.7111506585508&lon=-74.00669153398084')}>New York</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCityClick('London', 'lat=51.51&lon=-0.13')}>London</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCityClick('Paris', 'lat=48.85&lon=2.35')}>Paris</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCityClick('Fiji', 'lat=-17.7134&lon=178.0650')}>Fiji</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCityClick('Tokyo', 'lat=35.6895&lon=139.6917')}>Tokyo</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCityClick('Sydney', 'lat=-33.8688&lon=151.2093')}>Sydney</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCityClick('Moscow', 'lat=55.7558&lon=37.6173')}>Moscow</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCityClick('Edinburgh', 'lat=55.95253477269024&lon=-3.1882144149501515')}>Edinburgh</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCityClick('San Francisco', 'lat=37.7749&lon=-122.4194')}>San Francisco</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCityClick('Dallas Texas', 'lat=32.767536079427025&lon=-96.79270510147545')}>Dallas Texas</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCityClick('Rome', 'lat=41.888963694963444&lon=12.488638967239984')}>Rome</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCityClick('Cape Town', 'lat=-33.929314551840505&lon=18.423865445335082')}>Cape Town</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCityClick('Berlin', 'lat=52.51559105015214&lon=13.43098253904531')}>Berlin</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCityClick('Dubai', 'lat=25.18540097797315&lon=55.300330413199596')}>Dubai</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCityClick('Pretoria', 'lat=-25.75854076903342&lon=28.19133059078887')}>Pretoria</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCityClick('Johannesburg', 'lat=-26.21282029205617&lon=28.031119545737546')}>Johannesburg</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCityClick('Los Angeles', 'lat=34.05487382491925&lon=-118.24390023246544')}>Los Angeles</Dropdown.Item>
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
                  <div className='custom-loader'></div>{' '}
                </Link>
              </div>
            </div>
            <div className="div2">
            <div class="ribbon"><span>Most View</span></div>
              <h5 className='chart-info'>Temperature For {data.city.name}</h5>
              <div className='LineChart'>
                <BarChart data={data} />
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
                <DoughnutChart data={data}/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
