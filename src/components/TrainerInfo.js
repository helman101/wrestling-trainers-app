import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TrainerInfo = (props) => {
  const { trainer, handleClick } = props;
  const { name, trainerImg } = trainer;

  return (
    <Link to="/trainerProfile" onClick={handleClick}>
      <figure>
        <img src={trainerImg} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    </Link>
  );
};

TrainerInfo.propTypes = {
  trainer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    trainerImg: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default TrainerInfo;
