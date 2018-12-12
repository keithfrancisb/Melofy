import React from 'react';
import { withRouter, NavLink, Redirect, Route } from 'react-router-dom';
import { ProtectedRoute } from '../../../util/route_util';
import { connect } from 'react-redux';
import { createPlaylist } from '../../../actions/playlist_actions';
import { fetchCurrentUser } from '../../../actions/session_actions';

import PlaylistIndex from '../index/playlist/playlist_index.jsx';
import SongIndex from '../index/song/song_index.jsx';
import ArtistIndex from '../index/artist/artist_index.jsx';
import AlbumIndex from '../index/album/album_index.jsx';

import PlaylistShow from '../show/playlist_show.jsx';
import ArtistShow from '../show/artist_show.jsx';
import AlbumShow from '../show/album_show.jsx';


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
      this.props.submitForm(this.state.playlist, this.props.currentUserId);
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
              <Route exact path='/dashboard/collection' render={ () => <Redirect to='/dashboard/collection/playlists'/> } />
              <Route exact path='/dashboard/collection/playlists' render={ () => <PlaylistIndex playlistIds={this.props.savedPlaylistIds}/> } />
              <Route exact path='/dashboard/collection/albums' render={ () => <AlbumIndex albumIds={this.props.savedAlbumIds}/> } />
              <Route exact path='/dashboard/collection/songs' render={ () => <SongIndex songIds={this.props.savedSongIds}/> } />
              <Route exact path='/dashboard/collection/artists' render={ () => <ArtistIndex artistIds={this.props.savedArtistIds}/> } />

            </section>
          </div>
        </div>
      </div>

    );
  }
}

const msp = state => {
  const { saved_song_ids, saved_album_ids, saved_artist_ids, saved_playlist_ids } = state.session;
  return {
    savedAlbumIds: saved_album_ids,
    savedArtistIds: saved_artist_ids,
    savedSongIds: saved_song_ids,
    savedPlaylistIds: saved_playlist_ids,
    currentUserId: state.session.id
  };
};

const mdp = dispatch => {
  return {
    submitForm: (playlistName, userId) => dispatch(createPlaylist(playlistName))
      .then( () => dispatch(fetchCurrentUser(userId)))
  };
};


export default withRouter(connect(msp,mdp)(Collection));
