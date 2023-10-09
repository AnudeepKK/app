import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Images/logo.jpeg'

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-xl bg-dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <img src={Logo} alt="Logo" className='navbar-logo img-fluid' style={{ width: '30px', height: '30px' }} />
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/course" className="nav-link text-white">Course</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-white">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/event" className="nav-link text-white">Event</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
