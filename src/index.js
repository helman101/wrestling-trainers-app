import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import Routes from './routes/Routes';
import defaultState from './store/store';
import userReducer from './reducers/userReducer';
import currentReducer from './reducers/currentReducer';
import trainersReducer from './reducers/trainerReducer';

const rootReducer = combineReducers({
  user: userReducer,
  currentTrainer: currentReducer,
  trainers: trainersReducer,
});

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
