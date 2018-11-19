import React from 'react';
import { NavLink } from 'react-router-dom';
import Browse from './browse/browse';
import Search from './Search/Search';
import Collection from './collection/collection';
import { ProtectedRoute } from '../../util/route_util';

import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

class Dashboard extends React.Component {

  render(){
    const { currentUser, logout } = this.props;
    return (
      <div className='main'>
        <nav className='sidebar'>
          <h2>Melofy</h2>
          <ul className='three-musketeers'>
            <li>
              <div>
              <NavLink activeClassName='green' to='/dashboard/search'>
                <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z" fill="currentColor" fillRule="evenodd"></path></svg>
                <span className='three-musketeers-text'>Search</span>
              </NavLink>
              </div>
            </li>
            <li>
              <div>
                <NavLink activeClassName='green' to='/dashboard/browse'>
                  <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z" fill="currentColor"></path></svg>
                  <span className='three-musketeers-text'>Home</span>
                </NavLink>
              </div>
            </li>
            <li>
              <div>
                <NavLink activeClassName='green' to='/dashboard/collection'>
                  <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M311.873 77.46l166.349 373.587-39.111 17.27-166.349-373.587zM64 463.746v-384h42.666v384h-42.666zM170.667 463.746v-384h42.667v384h-42.666z" fill="currentColor"></path></svg>
                  <span className='three-musketeers-text'>Your Library</span>
                </NavLink>
              </div>
            </li>
          </ul>

          <ul>
            <li onClick={logout}>{currentUser.first_name} {currentUser.last_name}</li>
          </ul>
        </nav>

        <div className='now-playing-bar'>
          <footer></footer>
        </div>
        <ProtectedRoute path='/dashboard/search' component={Search}/>
        <ProtectedRoute path='/dashboard/browse' component={Browse}/>
        <ProtectedRoute path='/dashboard/collection' component={Collection}/>
      </div>

    );
  }
}

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(msp,mdp)(Dashboard);
