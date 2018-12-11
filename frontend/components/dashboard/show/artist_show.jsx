import React from 'react';
import { connect } from 'react-redux';
import { fetchArtist } from '../../../actions/artist_actions';
import { fetchCurrentSong } from '../../../actions/now_playing_actions';

import SongIndex from '../index/song/song_index';
import AlbumIndex from '../index/album/album_index';

class ArtistShow extends React.Component {

  componentDidMount(){
    this.props.fetchArtist(this.props.match.params.artistId);
  }

  render() {
    const { artist } = this.props;
    let songs;
    if(artist && artist.song_ids)
      songs = artist.song_ids.slice(0,6);
      debugger
    return (
      <div>
        <div className='artist-show-view'>
          <div className='content-scrolling'>
              <section className='artist-content'>
                <div className='artist-info'>
                  <header className='artist-header' style={{backgroundImage: 'url(' + artist.cover_url + ')'}}>
                    <h1 className='artist-header-title'>{artist.name}</h1>
                    <div className='header-buttons'>
                      <button className='btn btn-green'>PLAY</button>
                      <button className='btn btn-black btn-wide'>Save to your Library</button>
                    </div>
                  </header>
                  <div>
                    <section className='artist-songs'>
                      <div className='content-spacing'>
                        <h1 className='artist-subheaders'>Popular</h1>
                        <SongIndex songIds={songs} parentId={artist.id}/>
                      </div>
                    </section>
                    <section className='artist-albums'>
                      <div className='content-spacing'>
                        <h1 className='artist-subheaders'>Albums</h1>
                        <AlbumIndex albumIds={artist.album_ids} />
                      </div>
                    </section>
                  </div>
                </div>
              </section>

          </div>
        </div>

      </div>
    );
  }
}

const msp = (state, ownProps) => {
  const { artists } = state.entities;

  const artist = artists[ownProps.match.params.artistId] || {};

  return {
    artist,
  };
};

const mdp = dispatch => {
  return {
    fetchArtist: id => dispatch(fetchArtist(id)),
    fetchCurrentSong: songId => dispatch(fetchCurrentSong(songId))
  };
};


export default connect(msp,mdp)(ArtistShow);
