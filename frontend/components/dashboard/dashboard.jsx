import React from 'react';
import { NavLink } from 'react-router-dom';
import Browse from '../browse/browse';
import Search from '../Search/Search';
import Collection from '../collection/collection';
import { ProtectedRoute } from '../../util/route_util';

class Dashboard extends React.Component {

  render(){
    return (
      <div className='main'>
        <nav className='sidebar'>
          <h2>Melofy</h2>
          <ul className='three-musketeers'>
            <li>
              <div>
              <NavLink exact activeClassName='green' to='/dashboard/search'>Search</NavLink>
              </div>
            </li>
            <li>
              <div>
                <NavLink exact activeClassName='green' to='/dashboard/browse'>Home</NavLink>
              </div>
            </li>
            <li>
              <div>
                <NavLink exact activeClassName='green' to='/dashboard/collection'>Your Library</NavLink>
              </div>
            </li>
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

export default Dashboard;
