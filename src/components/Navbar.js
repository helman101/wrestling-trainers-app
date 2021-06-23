import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2F1000marcas.net%2Fwwe-logo%2F&psig=AOvVaw0HGDo7peC0G6EgMcufigcc&ust=1624460755100000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCPjh0YfCq_ECFQAAAAAdAAAAABAD" alt="logo" />
    <div>
      <Link to="/login">Log in</Link>
      <Link to="/signin">Sign Up</Link>
    </div>
  </nav>
);

export default Navbar;
