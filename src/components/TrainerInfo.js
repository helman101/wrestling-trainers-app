import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TrainerInfo = (props) => {
  const { handleLink } = props;
  const { name, trainer_img } = props.trainer;

  return (
    <Link to="/trainerProfile">
      <figure>
        <img src={trainer_img} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    </Link>
  );
};

TrainerInfo.propTypes = {
  name: PropTypes.string.isRequired,
  trainer_img: PropTypes.string.isRequired,
  handleLink: PropTypes.func.isRequired,
};

export default TrainerInfo;
