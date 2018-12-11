import React from 'react';
import { withRouter, NavLink, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPlaylist } from '../../../actions/playlist_actions';
import { ProtectedRoute } from '../../../util/route_util';

import PlaylistIndex from '../index/playlist/playlist_index.jsx';
import AlbumIndex from '../index/album/album_index.jsx';
import ArtistIndex from '../index/artist/artist_index.jsx';
import SongIndex from '../index/song/song_index.jsx';

import PlaylistShow from '../show/playlist_show.jsx';
import AlbumShow from '../show/album_show.jsx';
import ArtistShow from '../show/artist_show.jsx';

class Browse extends React.Component {
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

  render (){
    return (
      <div>

        <div className='browse-main-view'>
          <div className='content-scrolling'>
            <section className='content-spacing'>
              <div className='tabs-container'>
                <nav className='nav-tabs'>
                  <ul className='tabs'>
                    <li><NavLink activeClassName='selected-tab' to='/dashboard/browse/playlists'>Playlists</NavLink></li>
                    <li><NavLink activeClassName='selected-tab' to='/dashboard/browse/songs'>Songs</NavLink></li>
                    <li><NavLink activeClassName='selected-tab' to='/dashboard/browse/albums'>Albums</NavLink></li>
                    <li><NavLink activeClassName='selected-tab' to='/dashboard/browse/artists'>Artists</NavLink></li>
                  </ul>
                </nav>

              </div>
              <Route exact path='/dashboard/browse' render={ () => <Redirect to='/dashboard/browse/playlists'/> } />
              <ProtectedRoute exact path='/dashboard/browse/playlists' component={PlaylistIndex} />
              <ProtectedRoute exact path='/dashboard/browse/albums' component={AlbumIndex} />
              <ProtectedRoute exact path='/dashboard/browse/songs' component={SongIndex} />
              <ProtectedRoute exact path='/dashboard/browse/artists' component={ArtistIndex} />
            </section>
          </div>
        </div>
      </div>

    );
    // <ProtectedRoute exact path='/dashboard/browse/playlists/:playlistId' component={PlaylistShow} />
    // <ProtectedRoute exact path='/dashboard/browse/albums/:albumId' component={AlbumShow} />
    // <ProtectedRoute exact path='/dashboard/browse/artists/:artistId' component={ArtistShow} />
  }
}

export default Browse;
