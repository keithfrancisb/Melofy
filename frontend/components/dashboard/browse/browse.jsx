import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPlaylist } from '../../../actions/playlist_actions';
import { ProtectedRoute } from '../../../util/route_util';
import PlaylistBrowse from './p_browse/p_browse';
import PlaylistItemShow from '../collection//p_collection/p_collection_item_show';
import AlbumBrowse from './album_browse/album_browse';
import SongBrowse from './song_browse/s_browse';
import ArtistBrowse from './artist_browse/artist_browse';
import ArtistShow from './artist_browse/artist_show';

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
              <ProtectedRoute exact path='/dashboard/browse/playlists' component={PlaylistBrowse} />
              <ProtectedRoute exact path='/dashboard/browse/playlists/:playlistId' component={PlaylistItemShow} />
              <ProtectedRoute exact path='/dashboard/browse/albums' component={AlbumBrowse} />
              <ProtectedRoute exact path='/dashboard/browse/songs' component={SongBrowse} />
              <ProtectedRoute exact path='/dashboard/browse/artists' component={ArtistBrowse} />
              <ProtectedRoute exact path='/dashboard/browse/artists/:artistId' component={ArtistShow} />
            </section>
          </div>
        </div>
      </div>

    );
  }
}

export default Browse;
