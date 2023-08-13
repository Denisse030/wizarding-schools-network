import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/wizarding-schools">All Wizarding Schools</Link></li>
        <li><Link to="/students">All Students</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
