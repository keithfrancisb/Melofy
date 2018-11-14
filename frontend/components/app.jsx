import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';

const App = (props) => {

  // <ProtectedRoute exact path="/" comp
  return (
    <div>
      <header className='main-header'>
        <h2>Melofy</h2>
        <h3>It's not a 'melody' typo...Or is it?</h3>
        <GreetingContainer />
      </header>

      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
  );
};

export default App;
