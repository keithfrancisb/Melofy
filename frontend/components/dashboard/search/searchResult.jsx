import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink, Route } from 'react-router-dom';
import AlbumIndex from '../index/album/album_index.jsx';
import ArtistIndex from '../index/artist/artist_index.jsx';
import PlaylistIndex from '../index/playlist/playlist_index.jsx';
import SongIndex from '../index/song/song_index.jsx';

class SearchResult extends React.Component{

  render() {
    const { tab, searchTerm } = this.props;
    return (
      <div className="search-results">

        <div className="rela-block content-nav">
          <ul className="content-nav-list">
            <li>
              <NavLink to={`/dashboard/search/top`}
                activeClassName='selected-tab'>
                Top Results
              </NavLink>
            </li>
            <li>
              <NavLink to={`/dashboard/search/artists`}
                activeClassName='selected-tab'>
                Artists
              </NavLink>
            </li>
            <li>
              <NavLink to={`/dashboard/search/songs`}
                activeClassName='selected-tab'>
                Songs
              </NavLink>
            </li>
            <li>
              <NavLink to={`/dashboard/search/albums`}
                activeClassName='selected-tab'>
                Albums
              </NavLink>
            </li>
            <li>
              <NavLink to={`/dashboard/search/playlists`}
                activeClassName='selected-tab'>
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
          <Route path="/dashboard/search/artists" render={
            () => <ArtistIndex searchTerm={searchTerm} />
          }/>
          <Route path="/dashboard/search/tracks" render={
            () => <SongIndex searchTerm={searchTerm} />
          }/>
          <Route path="/dashboard/search/albums" render={
            () => <AlbumIndex searchTerm={searchTerm} />
          }/>
          <Route path="/dashboard/search/playlists" render={
            () => <PlaylistIndex searchTerm={searchTerm} />
          }/>
        </div>
      </div>

    );
  }

}

export default withRouter(SearchResult);
