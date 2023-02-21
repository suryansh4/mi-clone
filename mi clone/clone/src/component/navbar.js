import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          {/* <Link to="/">Home</Link> */}
          asmit kakkar
        </li>
        <li>
          {/* <Link to="/services">Services</Link> */}
          suryansh panwar
        </li>
        <li>
          {/* <Link to="/price">Price</Link> */}
          Pankaj udas
        </li>
        <li>
          {/* <Link to="/contact">Contact</Link> */}
          pankaj chaudhary
        </li>
      </ul>
    </nav>

  );
};

export default Navbar;
