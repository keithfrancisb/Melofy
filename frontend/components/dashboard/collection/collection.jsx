import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { ProtectedRoute } from '../../../util/route_util';
import { connect } from 'react-redux';
import { createPlaylist } from '../../../actions/playlist_actions';

import PlaylistIndex from '../index/playlist/playlist_index.jsx';
import PlaylistShow from '../show/playlist_show.jsx';

class Collection extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      newPlaylist: false,
      playlist: {name: ''}
    };

    this.changeBooleanState = this.changeBooleanState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeBooleanState() {
    this.setState({newPlaylist: !this.state.newPlaylist});
  }

  update() {
    return (e) => {
      this.setState({playlist: {name: e.target.value}});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.playlist.name !== '') {
      this.props.submitForm(this.state.playlist);
      this.setState({playlist: {name: ''}});
      this.changeBooleanState();
    }
  }

  createPlaylist(){
    if(this.state.newPlaylist)
      return (
        <div className='new-playlist-main'>
          <div className='new-playlist-container'>
            <div>
              <button onClick={this.changeBooleanState}>
                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>Close</title><path d="M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143" fill="#FFF" fillRule="evenodd"></path></svg>
              </button>
            </div>
            <div><h1 className='h1-new-playlist'>Create new playlist</h1></div>
            <div className='input-container'>
              <div className='input-box'>
                <div className='content-space'>
                  <h4 className='input-label'>Playlist Name</h4>
                  <input className='input-text' type='text' placeholder='Start typing...' onChange={this.update()} value={this.state.playlist.name}/>
                </div>
              </div>
            </div>
            <div className='button-group'>
              <button className='btn-cancel' onClick={this.changeBooleanState}>Cancel</button>
              <button className='btn-create' onClick={this.handleSubmit}>Create</button>
            </div>
          </div>
        </div>
      );
  }

  render (){
    return (
      <div>
        {this.createPlaylist()}
        <div className='collection-main-view'>
          <div className='content-scrolling'>
            <section className='content-spacing'>
              <div className='tabs-container'>
                <nav className='nav-tabs'>
                  <ul className='tabs'>
                    <li><NavLink activeClassName='selected-tab' to='/dashboard/collection/playlists'>Playlists</NavLink></li>
                    <li><NavLink activeClassName='selected-tab' to='/dashboard/collection/songs'>Songs</NavLink></li>
                    <li><NavLink activeClassName='selected-tab' to='/dashboard/collection/albums'>Albums</NavLink></li>
                    <li><NavLink activeClassName='selected-tab' to='/dashboard/collection/artists'>Artists</NavLink></li>
                  </ul>
                </nav>
                <div className='div-button'>
                  <button className='div-button' onClick={this.changeBooleanState}>New Playlist</button>
                </div>
              </div>
              <ProtectedRoute exact path='/dashboard/collection/playlists' component={PlaylistIndex} />
              <ProtectedRoute exact path='/dashboard/collection/playlists/:playlistId' component={PlaylistShow} />
            </section>
          </div>
        </div>
      </div>

    );
  }
}

const mdp = dispatch => {
  return {
    submitForm: (playlistName) => dispatch(createPlaylist(playlistName))
  };
};


export default withRouter(connect(null,mdp)(Collection));
