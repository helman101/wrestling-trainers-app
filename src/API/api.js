import setTrainersAction from '../actions/trainers';
import { logUserInAction } from '../actions/user';

const trainerListRequest = async (dispatch) => {
  try {
    const result = await fetch('http://127.0.0.1:3000/trainers').then((res) => res.json());
    dispatch(setTrainersAction(result));
  } catch (err) {
    dispatch();
  }
};

const userRequest = (params, push, toast) => async (dispatch) => {
  const urlParams = `?name=${params.name}&password=${params.password}`;
  try {
    const result = await fetch('http://127.0.0.1:3000/login'.concat(urlParams)).then((res) => res.json());
    if (result.name) {
      dispatch(logUserInAction(result));
      push('/');
    }
    const message = result.status === 'NO EXIST' ? 'User doesn\'t exist' : 'Wrong Password or Name';
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (err) {
    console.log(err.status);
  }
};

const userCreate = (params, push, toast) => async (dispatch) => {
  const data = params;
  console.log(data);
  const url = `http://127.0.0.1:3000/users?name=${data.name}&email=${data.email}&password=${data.password}&password_confirmation=${data.passwordConfirm}`;
  const send = {
    method: 'POST',
  };

  try {
    const result = await fetch(
      url,
      send,
    ).then((res) => res.json());
    console.log(result);
    if (result.status) {
      console.log(result);
      push('/');
      dispatch(logUserInAction(result));
    }
    const message = result.message.includes('blank') ? 'No space can be blank' : 'Name or Email in use';
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (err) {
    console.log(err);
  }
};

const appointmentCreate = (data, push) => async () => {
  const url = `http://127.0.0.1:3000/users/${data.userId}/appointments?user_id=${data.userId}&trainer_id=${data.trainerId}&appointmentTime=${data.time}`;
  const send = {
    method: 'POST',
  };

  try {
    fetch(
      url,
      send,
    ).then((res) => {
      push('/My_appointments');
      return res.json();
    });
  } catch (err) {
    console.log(err);
  }
};

const appointmentGet = async (set, id) => {
  const url = `http://127.0.0.1:3000/users/${id}/appointments`;

  try {
    const result = await fetch(
      url,
    ).then((res) => res.json());
    set(result);
  } catch (err) {
    console.log(err.status);
  }
};

export {
  trainerListRequest,
  userRequest,
  userCreate,
  appointmentCreate,
  appointmentGet,
};
