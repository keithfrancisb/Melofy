import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link, Route } from 'react-router-dom';
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
              <Link to={`/dashboard/search/top`}
                className={"rela-block app-link" + ((tab === 'top') ? ' active' : '')}>
                Top Results
              </Link>
            </li>
            <li>
              <Link to={`/dashboard/search/artists`}
                className={"rela-block app-link" + ((tab === 'artists') ? ' active' : '')}>
                Artists
              </Link>
            </li>
            <li>
              <Link to={`/dashboard/search/songs`}
                className={"rela-block app-link" + ((tab === 'tracks') ? ' active' : '')}>
                Songs
              </Link>
            </li>
            <li>
              <Link to={`/dashboard/search/albums`}
                className={"rela-block app-link" + ((tab === 'albums') ? ' active' : '')}>
                Albums
              </Link>
            </li>
            <li>
              <Link to={`/dashboard/search/playlists`}
                className={"rela-block app-link" + ((tab === 'playlists') ? ' active' : '')}>
                Playlists
              </Link>
            </li>
          </ul>
        </div>

        <div className="rela-block search-section">
          <Route path="/dashboard/search/top" render={() => (
            <div className="top-results">
              <div className="rela-block search-section">
                <h2>Songs</h2>
                <SongIndex searchTerm={searchTerm} />
              </div>
              <div className="rela-block search-section">
                <h2>Albums</h2>
                <AlbumIndex searchTerm={searchTerm} />
              </div>
              <div className="rela-block search-section">
                <h2>Artists</h2>
                <ArtistIndex searchTerm={searchTerm} />
              </div>
              <div className="rela-block search-section">
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
