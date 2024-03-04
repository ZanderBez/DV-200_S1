import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartBar, FaHome, FaInstagram } from 'react-icons/fa';
import { FaCodeCompare } from 'react-icons/fa6';
import { IoLogoFacebook } from 'react-icons/io5';
import { BsTwitterX } from 'react-icons/bs';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav >
      <div className='sidebar'>
        <div className='top_section'>
          <h1 className='logo'>Logo</h1>
        </div>
        <ul>
          <Link to="/">
            <p>
              <FaHome /> Home
            </p>
          </Link>
          <Link to="/comparing">
            <p>
              <FaCodeCompare /> Comparing
            </p>
          </Link>
          <Link to="/timeline">
            <p>
              <FaChartBar /> Timeline
            </p>
          </Link>
        </ul>
        <div className='bottom_section'>
          <ul className='social_icons'>
            
              <a href='#'>
                <FaInstagram />
              </a>
            
              <a href='#'>
                <BsTwitterX />
              </a>
            
              <a href='#'>
                <IoLogoFacebook />
              </a>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



