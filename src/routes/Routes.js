import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LeftMenu from '../components/LeftMenu';
import Home from '../components/Home';
import HowTo from '../components/HowTo';
import AppointmentList from '../container/AppointmentList';
import LogIn from '../components/LogIn';
import SignIn from '../components/SignIn';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <LeftMenu />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/how_to" component={HowTo} />
      <Route path="/my_appointments" component={AppointmentList} />
      <Route path="/login" component={LogIn} />
      <Route path="/signin" component={SignIn} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
