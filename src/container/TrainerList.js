import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import trainerListRequest from '../API/api';
import TrainerInfo from '../components/TrainerInfo';
import changeCurrentTrainer from '../actions/current';

const TrainerList = (props) => {
  const { trainers } = props;

  useEffect(() => {
    if (trainers.length === 0) {
      props.dispatch(trainerListRequest);
    }
  }, []);

  const handleLink = (trainer) => () => {
    props.dispatch(changeCurrentTrainer(trainer));
  };

  if (trainers === []) {
    return (
      <div>
        <h3>Getting Trainers...</h3>
      </div>
    );
  }
  return (
    <div>
      {trainers.map((trainer) => (
        <TrainerInfo
          key={trainer.name}
          trainer={trainer}
          handleClick={handleLink(trainer)}
        />
      ))}
    </div>
  );
};

TrainerList.propTypes = {
  trainers: PropTypes.instanceOf(Array).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  trainers: state.trainers,
});

export default connect(mapStateToProps)(TrainerList);
