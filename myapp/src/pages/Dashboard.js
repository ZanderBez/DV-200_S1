import React from 'react'
import './Dashboard.css';
import Dropdown from 'react-bootstrap/Dropdown';

const Dashboard = () => {
  return (
    <div className='title'>
      <h1>This is the Dashboard page</h1>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
    
  )
}

export default Dashboard
