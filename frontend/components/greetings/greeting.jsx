import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {


  render(){
    const { currentUser, logout } = this.props;
    let output;
    if(currentUser){
      output = (
        <div className='welcome-msg'>
          <span>Logged in as {currentUser.first_name}</span>
          <button onClick={logout}>Log Out</button>
        </div>
      );
    } else {
      output = (
        <div className='session-links'>
          <Link className='links' to='/signup'>Sign Up</Link>
          <Link className='links' to='/login'>Log In</Link>
        </div>
      );
    }

    return (
      <>
      {output}
      </>
    );
  }
}
export default Greeting;
