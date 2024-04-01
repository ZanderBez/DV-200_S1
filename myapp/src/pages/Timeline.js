import React from 'react'
import './Timeline.css';
import Dropdown from 'react-bootstrap/Dropdown';

import{
  Chart as ChartJS,
  LineElement,
  TimeScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js'

import 'chartjs-adapter-date-fns';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  LineElement,
  TimeScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const Timeline = () => {

  const data = {
    labels: ['2024-11-01', '2024-11-02', '2024-11-03', '2024-11-04'],
    datasets: [
      {
        label: 'Temperature °C',
        data: [22, 32, 18, 33],
        backgroundColor: 'aqua',
        borderColor:  ['rgb(193, 165, 123)'],
        tension: 0.4
      }
    ]
  };

  const options = {
    scales: {
      x: {
        ticks: {
          color: 'white', 
      },
      grid: {
          color: 'rgba(255, 255, 255, 0.1)', 
      },
        type: 'time',
        time: {
          unit: 'day'
        }
      },
      y: {
        ticks: {
          color: 'white', 
      },
      grid: {
          color: 'rgba(255, 255, 255, 0.1)', 
      },
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
          labels: {
              color: 'white', 
          },
      },
  },
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
        <h4>Here You can see the Highest Temperature of the Cities</h4>
      </div>
      </div>
      <div className='container-timeline'>
      <h2>New York</h2>
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
        <div className='timeline-chart'>
          
          <Line
          data = {data}
          options={options}
          ></Line>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Timeline
