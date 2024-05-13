// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark text-white">
      <div className="container ">
        <div className="header-content d-flex justify-content-between align-content-lg-center ">
          <Link to="/">
            <h1 className='text-white'>Data</h1>
          </Link>
          <Link to="/form">
            <button className='btn btn-primary btn-md'>Add</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
