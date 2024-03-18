import React from 'react'
import './Comparing.css';
import Dropdown from 'react-bootstrap/Dropdown';

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
      <div class="parent1">
      <div class="div4">
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
      </div>
      <div class="div5">
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
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Comparing
