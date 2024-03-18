import React from 'react'
import './Timeline.css';

const Timeline = () => {
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
        <div className='timeline-chart'></div>
      </div>
      </div>
    </div>
  )
}

export default Timeline
