import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import GreetingContainer from '../greetings/greeting_container';

class Splash extends React.Component {

  render() {

    // <GreetingContainer />
    return (
      <div>
        <div className ="splash">
          <h1 className="splash-header">Melodies for everyone.</h1>
          <h3 className="splash-slogan">Not many Songs. Just use Spotify.</h3>
          <Link className="splash-signup" to='/signup'>GET MELOFY FOR FREE!</Link>
          <div className="divider-or-parent">
            <div className="splash-divider-or"/> <span className="or">OR</span> <div className="splash-divider-or"/>
          </div>
            <button className="splash-button" onClick={this.props.demoLogin}>LOG IN AS DEMO USER</button>
        </div>
      </div>
    );
  }
};

const mdp = dispatch => {
  return {
    demoLogin: () => dispatch(login({email:'demo_user@notMail.com', password:'123456'}))
  };
};

export default connect(null,mdp)(Splash);
