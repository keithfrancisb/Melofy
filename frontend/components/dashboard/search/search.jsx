import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import SearchResult from './searchResult';
import { ProtectedRoute } from '../../../util/route_util';

import PlaylistShow from '../show/playlist_show.jsx';
import AlbumShow from '../show/album_show.jsx';
import ArtistShow from '../show/artist_show.jsx';

class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    return (e) => {
      this.setState({ searchTerm: e.target.value });
    };
  }


  render (){
    let result;
    if(this.state.searchTerm){
      result = (
        <div className='search-content'>
          <Route exact path='/dashboard/search' render={ () => <Redirect to='/dashboard/search/top' /> } />
          <Route path='/dashboard/search/:tab' render={ () => <SearchResult searchTerm={this.state.searchTerm} /> } />
        </div>
      );
    } else {
      result = (
        <div className='search-content --empty'>
          <h1 className='search-title'>Search Melofy</h1>
          <p className='search-subtitle'>Find your favorite songs, artists, albums, podcasts and playlists.</p>
        </div>
      );
    }

    return (
      <div className='search-main-view'>
        <div className='content-scrolling'>
          <div className='search-input-container'>
            <input type='text' onChange={this.handleChange()} className='search-input' placeholder='Start typing...' value={this.state.searchTerm}/>
          </div>
            <section className='content-spacing'>
              {result}

              <ProtectedRoute exact path='/dashboard/search/artists/:artistId' component={ArtistShow} />
              <ProtectedRoute exact path='/dashboard/search/playlists/:playlistId' component={PlaylistShow} />
              <ProtectedRoute exact path='/dashboard/search/albums/:albumId' component={AlbumShow} />
            </section>
        </div>
      </div>
    );
  }
}

export default Search;
