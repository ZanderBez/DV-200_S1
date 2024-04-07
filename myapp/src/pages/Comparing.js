import React, { useState, useEffect } from 'react';
import './Comparing.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaWind } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FaCloud } from "react-icons/fa";
import PieChart from '../Components/PieChart';
import RadarChart from '../Components/RadarCharts';
import BarChart from '../Components/BarChart';
import axios from 'axios';

const Comparing = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [selectedChart, setSelectedChart] = useState('Pie');
  const [selectedChart1, setSelectedChart1] = useState('Pie');

  const [city1, setCity1] = useState({ name: 'New York', apiKey: 'lat=40.7111506585508&lon=-74.00669153398084' });
  const [city2, setCity2] = useState({ name: 'London', apiKey: 'lat=51.51&lon=-0.13' });

  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  useEffect(() => {
    fetchData(city1.apiKey, setData1); 
  }, [city1]);

  useEffect(() => {
    fetchData(city2.apiKey, setData2); 
  }, [city2]);

  const fetchData = (apiKey, setData) => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?${apiKey}&appid=5b41cb56e5c0fa510a161726514c5cf3`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log('Error fetching data: ', error);
      });
  };

  const handleCity1Click = (cityName, apiCoordinates) => {
    setCity1({ name: cityName, apiKey: apiCoordinates });
  };

  const handleCity2Click = (cityName, apiCoordinates) => {
    setCity2({ name: cityName, apiKey: apiCoordinates });
  };

  const handleChartTypeSelect = (chartType) => {
    setSelectedChart(chartType);
  };
  const handleChart1TypeSelect = (chartType) => {
    setSelectedChart1(chartType);
  };

  if (!data1 || !data2) {
    return <h1 className='load'>Loading...</h1>;
  }

  return (
    <div className='compare-container '>
      <div className='navbar-spacer'></div>
      <div className='compare-content'>
      <div className='title-container'>
      <div class="wrapper">
            <svg>
              <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                COMPARE
              </text>
            </svg>
          </div>
        <div className='title-info'>
        <h4>Here you may compare cities weather to one other. </h4>
      </div>
      </div>
      <div className='compare-col'>
      <div className="parent1">
      <div className="div4">
        <div className='drop1'>
      <Dropdown className='dropdown'>
            <Dropdown.Toggle id="dropdown-basic1">
            {city1.name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleCity1Click('New York', 'lat=40.7111506585508&lon=-74.00669153398084')}>New York</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity1Click('London', 'lat=51.51&lon=-0.13')}>London</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity1Click('Paris', 'lat=48.85&lon=2.35')}>Paris</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity1Click('Fiji', 'lat=-17.7134&lon=178.0650')}>Fiji</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity1Click('Tokyo', 'lat=35.6895&lon=139.6917')}>Tokyo</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity1Click('Sydney', 'lat=-33.8688&lon=151.2093')}>Sydney</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity1Click('Moscow', 'lat=55.7558&lon=37.6173')}>Moscow</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity1Click('Edinburgh', 'lat=55.95253477269024&lon=-3.1882144149501515')}>Edinburgh</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity1Click('San Francisco', 'lat=37.7749&lon=-122.4194')}>San Francisco</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity1Click('Dallas Texas', 'lat=32.767536079427025&lon=-96.79270510147545')}>Dallas Texas</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity1Click('Rome', 'lat=41.888963694963444&lon=12.488638967239984')}>Rome</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity1Click('Cape Town', 'lat=-33.929314551840505&lon=18.423865445335082')}>Cape Town</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity1Click('Berlin', 'lat=52.51559105015214&lon=13.43098253904531')}>Berlin</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity1Click('Dubai', 'lat=25.18540097797315&lon=55.300330413199596')}>Dubai</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity1Click('Pretoria', 'lat=-25.75854076903342&lon=28.19133059078887')}>Pretoria</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity1Click('Johannesburg', 'lat=-26.21282029205617&lon=28.031119545737546')}>Johannesburg</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity1Click('Los Angeles', 'lat=34.05487382491925&lon=-118.24390023246544')}>Los Angeles</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='dropdown'>
            <Dropdown.Toggle id="dropdown-basic1">
            {selectedChart === 'Pie' ? 'Pie Graph' : selectedChart === 'Bar' ? 'Bar Graph' : 'Radar Graph'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleChartTypeSelect('Pie')}>Pie Graph</Dropdown.Item>
              <Dropdown.Item onClick={() => handleChartTypeSelect('Bar')}>Bar Graph</Dropdown.Item>
              <Dropdown.Item onClick={() => handleChartTypeSelect('Radar')}>Radar Graph</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </div>
            <div className='title-city1'>
              <h2>{city1.name}</h2>
              <h5>Weather report for today:</h5>
            </div>
            <div className='climate-info'>
            <h2>{data1.list[0].weather[0].main}</h2>
                <h5>Temperature:</h5>
                <div className='climate'>
                  <h2>{kelvinToCelsius(data1.list[0].main.temp).toFixed(1)} °C</h2>
                </div>
                <div className='climate-icons'>
                  <div className='wind'>
                    <h1><FaWind /></h1>
                    <h4>Wind</h4>
                    <h5>{data1.list[0].wind.speed} MP/H</h5>
                  </div>

                  <div className='humidity'>
                    <h1><WiHumidity /></h1>
                    <h4>Humidity</h4>
                    <h5>{data1.list[0].main.humidity} g/kg</h5>
                  </div>

                  <div className='wind'>
                    <h1><FaCloud /></h1>
                    <h4>Cloudy Change</h4>
                    <h5>{data1.list[0].clouds.all} %</h5>
                  </div>
                </div>
            </div> 
            <h5 className='chart-info'>Weather Report in {city1.name}:</h5>
          <div className='PieChart'>
            {selectedChart === 'Pie' && <PieChart data={data1} />}
            {selectedChart === 'Bar' && <BarChart data={data1} />}
            {selectedChart === 'Radar' && <RadarChart data={data1} />}
          </div>
      </div>
      <div className="div5">
      <div className='drop1'>
      <Dropdown className='dropdown'>
            <Dropdown.Toggle id="dropdown-basic2">
            {city2.name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleCity2Click('New York', 'lat=40.7111506585508&lon=-74.00669153398084')}>New York</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity2Click('London', 'lat=51.51&lon=-0.13')}>London</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity2Click('Paris', 'lat=48.85&lon=2.35')}>Paris</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity2Click('Fiji', 'lat=-17.7134&lon=178.0650')}>Fiji</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity2Click('Tokyo', 'lat=35.6895&lon=139.6917')}>Tokyo</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity2Click('Sydney', 'lat=-33.8688&lon=151.2093')}>Sydney</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity2Click('Moscow', 'lat=55.7558&lon=37.6173')}>Moscow</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity2Click('Edinburgh', 'lat=55.95253477269024&lon=-3.1882144149501515')}>Edinburgh</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity2Click('San Francisco', 'lat=37.7749&lon=-122.4194')}>San Francisco</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity2Click('Dallas Texas', 'lat=32.767536079427025&lon=-96.79270510147545')}>Dallas Texas</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity2Click('Rome', 'lat=41.888963694963444&lon=12.488638967239984')}>Rome</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity2Click('Cape Town', 'lat=-33.929314551840505&lon=18.423865445335082')}>Cape Town</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity2Click('Berlin', 'lat=52.51559105015214&lon=13.43098253904531')}>Berlin</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity2Click('Dubai', 'lat=25.18540097797315&lon=55.300330413199596')}>Dubai</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity2Click('Pretoria', 'lat=-25.75854076903342&lon=28.19133059078887')}>Pretoria</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity2Click('Johannesburg', 'lat=-26.21282029205617&lon=28.031119545737546')}>Johannesburg</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCity2Click('Los Angeles', 'lat=34.05487382491925&lon=-118.24390023246544')}>Los Angeles</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='dropdown'>
            <Dropdown.Toggle id="dropdown-basic1">
            {selectedChart === 'Pie' ? 'Pie Graph' : selectedChart === 'Bar' ? 'Bar Graph' : 'Radar Graph'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleChart1TypeSelect('Pie')}>Pie Graph</Dropdown.Item>
              <Dropdown.Item onClick={() => handleChart1TypeSelect('Bar')}>Bar Graph</Dropdown.Item>
              <Dropdown.Item onClick={() => handleChart1TypeSelect('Radar')}>Radar Graph</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </div>
    <div className='title-city1'>
              <h2>{city2.name}</h2>
              <h5>Weather report for today:</h5>
            </div>
            <div className='climate-info'>
            <h2>{data2.list[0].weather[0].main}</h2>
                <h5>Temperature:</h5>
                <div className='climate'>
                  <h2>{kelvinToCelsius(data2.list[0].main.temp).toFixed(1)} °C</h2>
                </div>
                <div className='climate-icons'>
                  <div className='wind'>
                    <h1><FaWind /></h1>
                    <h4>Wind</h4>
                    <h5>{data2.list[0].wind.speed} MP/H</h5>
                  </div>

                  <div className='humidity'>
                    <h1><WiHumidity /></h1>
                    <h4>Humidity</h4>
                    <h5>{data2.list[0].main.humidity} g/kg</h5>
                  </div>

                  <div className='wind'>
                    <h1><FaCloud /></h1>
                    <h4>Cloudy Change</h4>
                    <h5>{data2.list[0].clouds.all} %</h5>
                  </div>
                </div>
            </div> 
            <h5 className='chart-info'>Weather Report in {city2.name}:</h5>
          <div className='PieChart'>
            {selectedChart1 === 'Pie' && <PieChart data={data2} />}
            {selectedChart1 === 'Bar' && <BarChart data={data2} />}
            {selectedChart1 === 'Radar' && <RadarChart data={data2} />}
          </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Comparing