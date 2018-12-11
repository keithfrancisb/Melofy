import React from 'react';
import { connect } from 'react-redux';
import { ProtectedRoute } from '../../../util/route_util';
import { withRouter, NavLink, Route } from 'react-router-dom';

import AlbumIndex from '../index/album/album_index.jsx';
import ArtistIndex from '../index/artist/artist_index.jsx';
import PlaylistIndex from '../index/playlist/playlist_index.jsx';
import SongIndex from '../index/song/song_index.jsx';

import PlaylistShow from '../show/playlist_show.jsx';
import AlbumShow from '../show/album_show.jsx';
import ArtistShow from '../show/artist_show.jsx';

class SearchResult extends React.Component{

  render() {
    const { tab, searchTerm } = this.props;
    return (
      <div className="search-results">

        <div className="rela-block content-nav">
          <ul className="content-nav-list">
            <li>
              <NavLink to={`/dashboard/search/top`} activeClassName='selected-tab'>
                Top Results
              </NavLink>
            </li>
            <li>
              <NavLink to={`/dashboard/search/artists`} activeClassName='selected-tab'>
                Artists
              </NavLink>
            </li>
            <li>
              <NavLink to={`/dashboard/search/songs`} activeClassName='selected-tab'>
                Songs
              </NavLink>
            </li>
            <li>
              <NavLink to={`/dashboard/search/albums`} activeClassName='selected-tab'>
                Albums
              </NavLink>
            </li>
            <li>
              <NavLink to={`/dashboard/search/playlists`} activeClassName='selected-tab'>
                Playlists
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <Route path="/dashboard/search/top" render={() => (
            <div className="top-results">
              <div className="search-category">
                <h2></h2>
                <SongIndex searchTerm={searchTerm} />
              </div>
              <div className="search-category">
                <h2>Artists</h2>
                <ArtistIndex searchTerm={searchTerm} />
              </div>
              <div className="search-category">
                <h2>Albums</h2>
                <AlbumIndex searchTerm={searchTerm} />
              </div>
              <div className="search-category">
                <h2>Playlists</h2>
                <PlaylistIndex searchTerm={searchTerm} />
              </div>
            </div>
          )}/>
        <Route exact path="/dashboard/search/artists" render={
            () => <ArtistIndex searchTerm={searchTerm} />
          }/>
        <Route exact path="/dashboard/search/songs" render={
            () => <SongIndex searchTerm={searchTerm} />
          }/>
        <Route exact path="/dashboard/search/albums" render={
            () => <AlbumIndex searchTerm={searchTerm} />
          }/>
        <Route exact path="/dashboard/search/playlists" render={
            () => <PlaylistIndex searchTerm={searchTerm} />
          }/>
        </div>
      </div>

    );
  }

}

export default withRouter(SearchResult);
