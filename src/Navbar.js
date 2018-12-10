import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/users'>Users</Link>
        <ul>
          <li>
            <Link to='/users/jeff'>Jeff</Link>
          </li>
          <li>
            <Link to='/users/lorenzo'>Lorenzo</Link>
          </li>
        </ul>
      </li>
    </nav>
  );
}

export default Navbar;
