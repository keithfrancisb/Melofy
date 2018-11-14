import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {


  render(){
    const { currentUser, logout } = this.props;
    let output;
    if(currentUser){
      output = (
        <div>
          <h4>Welcome {currentUser.first_name}</h4>
          <button onClick={logout}>Log Out</button>
        </div>
      );
    } /*else {
      output = (
        <div>
          <Link className='links' to='/signup'>Sign Up</Link>
          <Link className='links' to='/login'>Log In</Link>
        </div>
      );
    }*/

    return (
      <>
      {output}
      </>
    );
  }
}
export default Greeting;
