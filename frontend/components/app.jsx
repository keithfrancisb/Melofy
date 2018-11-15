import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greetings/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Dashboard from './dashboard/dashboard';

class App extends React.Component {

  // <h3>It's not a 'melody' typo...Or is it?</h3>
  render() {
    return (
      <>
      <div>
        <header className='main-header'>
          <h2>Melofy</h2>
          <GreetingContainer />
        </header>
      </div>

          <ProtectedRoute exact path="/" component={Dashboard} />
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
      </>
    );
  }
}

export default App;
