import React, { useState, useEffect } from 'react';
import './Timeline.css';
import Dropdown from 'react-bootstrap/Dropdown';
import TimeChart from '../Components/TimeLineChart';
import axios from 'axios';


const Timeline = () => {
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
    return <h2 className='load'>loading</h2>;
  }

  return (
    <div className='timeline-container '>
      <div className='navbar-spacer'></div>
      <div className='timeline-content'>
      <div className='title-container'>
        <div className='title'>
        <h1>This is the TimeLine Page</h1>
      </div>
        <div className='title-info'>
        <h4>Here You can see the Temperature of the Cities for Up to days</h4>
      </div>
      </div>
      <div className='container-timeline'>
      <h2>{data.city.name}</h2>
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
            </Dropdown.Menu>
          </Dropdown>
        <div className='timeline-chart'>
        <TimeChart data={data} />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Timeline
