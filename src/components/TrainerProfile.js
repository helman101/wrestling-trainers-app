import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from '../assets/styles/style.module.css';
import { appointmentCreate } from '../API/api';

const TrainerProfile = (props) => {
  const { trainer, user } = props;
  const [date, setDate] = useState(null);

  const handleChange = (e) => {
    const { value } = e.target;
    setDate(value);
  };

  const handleClick = () => {
    let newDate = new Date(Date.parse(date));
    newDate = `${newDate.getDay()}/${newDate.getMonth()}/${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}`;
    const params = {
      time: newDate,
      userId: user.id,
      trainerId: trainer.id,
    };
    if (date !== null) {
      props.dispatch(appointmentCreate(params, props.history.push));
    }
  };

  const getDisplay = () => {
    if (Object.keys(user).length !== 0) {
      return (
        <div className={`${styles.profileBtnCont}`}>
          <div className={`${styles.pb1}`}>
            <div className={`${styles.mb1} ${styles.appointment}`}>Set an Appointment</div>
            <input type="datetime-local" onChange={handleChange} />
            <button type="button" className={`${styles.ml1} ${styles.appointmentBtn}`} onClick={handleClick}>Submit</button>
          </div>
        </div>
      );
    }
    return (
      <Link to="/Log_in" className={`${styles.btnRed}`}>Please log in to make appointments</Link>
    );
  };

  return (
    <div className={`${styles.dFlex} ${styles.trainerProfile}`}>
      <div className={`${styles.width50p} ${styles.dFlex} ${styles.justifyContentCenter}`}>
        <img className={`${styles.trainerPImg}`} src={trainer.trainerImg} alt={trainer.name} />
      </div>
      <div className={`${styles.width50p}`}>
        <div className={`${styles.profileTitle}`}>{trainer.name}</div>
        <div className={`${styles.profileFighting}`}>
          Figthing Style:
          {' '.concat(trainer.fightingStyle)}
        </div>
        <div className={`${styles.profileDesc} ${styles.mb1}`}>{trainer.description}</div>
        { getDisplay() }
      </div>
    </div>
  );
};

TrainerProfile.propTypes = {
  trainer: PropTypes.instanceOf(Object).isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  trainer: state.currentTrainer,
});

export default connect(mapStateToProps)(TrainerProfile);
