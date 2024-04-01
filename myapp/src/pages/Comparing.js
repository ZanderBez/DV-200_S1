import React from 'react'
import './Comparing.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { WiDaySunny } from "react-icons/wi";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaWind } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FaCloud } from "react-icons/fa";
import PieChart from '../Components/PieChart';

const Comparing = () => {
  return (
    <div className='compare-container '>
      <div className='navbar-spacer'></div>
      <div className='compare-content'>
      <div className='title-container'>
        <div className='title'>
        <h1>This is the Comparing Page</h1>
      </div>
        <div className='title-info'>
        <h4>Here you may compare cities weather to one other. </h4>
      </div>
      </div>
      <div className='compare-col'>
      <div className="parent1">
      <div className="div4">
      <Dropdown className='drop-compare'>
      <Dropdown.Toggle  id="dropdown-basic">
        New York
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">London</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Paris</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Fiji</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <div className='title-city1'>
            <h2>New York</h2>
            <h3>Weather report:</h3>
            </div>
            <div className='climate-info'>
            <h2>Sunny</h2>
              <div className='climate'>
                <h2>32 C</h2>
                <h1><WiDaySunny /></h1>
              </div>
              <div className='climate-icons'>
               <div className='uv'>
               <h1><MdOutlineWbSunny /></h1>
               <h4>UV 1 </h4>
               <h5>Low</h5>
               </div>

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
      <div className="div5">
      <Dropdown className='drop-compare'>
      <Dropdown.Toggle  id="dropdown-basic">
        London
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">London</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Paris</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Fiji</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <div className='title-city1'>
            <h2>London</h2>
            <h3>Weather report:</h3>
            </div>
            <div className='climate-info'>
            <h2>Cloudy</h2>
              <div className='climate'>
                <h2>32 C</h2>
                <h1><WiDaySunny /></h1>
              </div>
              <div className='climate-icons'>
               <div className='wind'>
               <h1><FaWind /></h1>
               <h4>12 MPH</h4>
               <h5>North</h5>
               </div>

               <div className='humidity'>
               <h1><WiHumidity /></h1>
               <h4>Humidity</h4>
               <h5>50 g/kg</h5>
                </div>

              <div className='wind'>
               <h1><FaCloud /></h1>
               <h4>Wind Change</h4>
               <h5>40%</h5>
              </div>
              </div>
            </div> 
            <h5 className='chart-info'>Weather Report in London:</h5>
          <div className='PieChart'>
          <PieChart />
          </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Comparing