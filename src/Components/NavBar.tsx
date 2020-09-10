import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <NavLink activeStyle={{ fontWeight: 'bold' }} to="/" exact>
        Home
      </NavLink>
      {' - '}
      <NavLink activeStyle={{ fontWeight: 'bold' }} to="/about" exact>
        About
      </NavLink>
      {' - '}
      <NavLink activeStyle={{ fontWeight: 'bold' }} to="/discover" exact>
        Discover Movies
      </NavLink>
    </div>
  );
}
