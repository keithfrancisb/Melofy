import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {


  // <span>Logged in as {currentUser.first_name}</span>
  // <button onClick={logout}>Log Out</button>
  render(){
    const { currentUser, logout } = this.props;
    let output;
    if(currentUser){
      output = (
        <div className='welcome-msg'>
        </div>
      );
    } else {
      output = (
        <div className='nav-bar'>
          <nav className = 'nav-left'>
            <Link className='logo-name' to='/'>Melofy</Link>
          </nav>
          <nav className = 'nav-right'>
            <ul>
              <li>
                <a className='links' href="https://www.github.com/keithfrancisb">GitHub</a>
              </li>
              <li>
                <a className='links' href="https://www.linkedin.com/in/keithfrancisb">LinkedIn</a>
              </li>
              <li className='links-divider'></li>
              <li>
                <Link className='links' to='/signup'>Sign Up</Link>
              </li>
              <li>
                <Link className='links' to='/login'>Log In</Link>
              </li>

            </ul>
          </nav>
        </div>
      );
    }

    return (
      <div>
      {output}
    </div>
    );
  }
}
export default Greeting;
