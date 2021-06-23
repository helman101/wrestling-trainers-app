import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const TrainerProfile = (props) => {
  const { trainer, user } = props;

  return (
    <div>
      <div>
        <h2>{trainer.name}</h2>
        <h3>
          Figthing Style:
          {' '.concat(trainer.fightingStyle)}
        </h3>
        <p>{trainer.description}</p>
        { Object.keys(user).length === 0
          ? <button type="button">See Avaible Classes</button>
          : <Link to="/logIn">Log In To See Avaible Classes</Link>}
      </div>
      <div>
        <img src={trainer.trainerImg} alt={trainer.name} />
      </div>
    </div>
  );
};

TrainerProfile.propTypes = {
  trainer: PropTypes.instanceOf(Object).isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  trainer: state.currentTrainer,
});

export default connect(mapStateToProps)(TrainerProfile);
