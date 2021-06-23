const SET_USER = 'SET_USER';
const UNSET_USER = 'USET_USER';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER: {
      return action.payload;
    }
    case UNSET_USER: {
      return null;
    }
    default:
      return state;
  }
};

export default userReducer;
