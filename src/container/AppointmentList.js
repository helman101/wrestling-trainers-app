import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { appointmentGet } from '../API/api';

const AppointmentList = (props) => {
  const { user, trainers } = props;
  const [appointments, setAppointments] = useState(null);

  useEffect(() => {
    appointmentGet(setAppointments, user.id);
  }, []);

  const getRigthTime = (a) => {
    const result = a.appointmentTime.slice(0, 16).replace('T', ' ').split(' ');
    result[0] = result[0].split('-');
    return result;
  };

  return (
    <div>
      <h1>{user.name.concat(' Appointments')}</h1>
      <table>
        <thead>
          <tr>
            <td>Trainer</td>
            <td>Date</td>
            <td>Hour</td>
          </tr>
        </thead>
        { appointments && appointments.map((appointment) => {
          const date = getRigthTime(appointment);
          return (
            <tbody key={appointment.id}>
              <tr>
                <td>{trainers[appointment.trainer_id - 1].name}</td>
                <td>{`${date[0][2]}/${date[0][1]}/${date[0][0]}`}</td>
                <td>{`${date[1]}`}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

AppointmentList.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  trainers: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  trainers: state.trainers,
});

export default connect(mapStateToProps)(AppointmentList);
