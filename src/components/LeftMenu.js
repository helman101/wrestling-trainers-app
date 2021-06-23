import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LeftMenu = (props) => {
  const { user } = props;
  return (
    <aside>
      <div>
        <Link to="/">Home</Link>
        <Link to="/how_to">How to</Link>
        <Link to="/trainers">Trainers</Link>
        { user && <Link to="/my_appointment">My Appointments</Link> }
      </div>
    </aside>
  );
};

LeftMenu.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
};

export default LeftMenu;
