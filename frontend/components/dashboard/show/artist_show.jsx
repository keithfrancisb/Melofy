import React from 'react';
import { connect } from 'react-redux';
import { fetchArtist } from '../../../actions/artist_actions';
import { fetchCurrentSong } from '../../../actions/now_playing_actions';
import { save, unsave } from '../../../actions/save_actions';

import SongIndex from '../index/song/song_index';
import AlbumIndex from '../index/album/album_index';

class ArtistShow extends React.Component {

  constructor(props){
    super(props);

    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount(){
    this.props.fetchArtist(this.props.match.params.artistId);
  }

  handleSave() {
    const { savedArtistIds, artist } = this.props;
    if(savedArtistIds.includes(artist.id)){
      const saveId = this.props.saves.filter( (save) => {
        return save.saveable_id === this.props.artist.id && save.saveable_type === 'Artist';
      })[0].id;
      this.props.unsave(saveId);
    } else {
      this.props.save(artist.id, 'Artist');
    }
  }

  render() {
    const { artist, savedArtistIds } = this.props;
    let songs;
    if(artist && artist.song_ids)
      songs = artist.song_ids.slice(0,6);


    const player = document.getElementById('music-player');
    let playPause = 'PLAY';

    if(player && !player.paused) playPause = 'PAUSE';

    const saveLabel = savedArtistIds.includes(artist.id) ? 'Remove from your Library' : 'Save to your Library';
    return (
      <div>
        <div className='artist-show-view'>
          <div className='content-scrolling'>
              <section className='artist-content'>
                <div className='artist-info'>
                  <header className='artist-header' style={{backgroundImage: 'url(' + artist.cover_url + ')'}}>
                    <h1 className='artist-header-title'>{artist.name}</h1>
                    <div className='header-buttons'>
                      <button className='btn btn-green'>{playPause}</button>
                      <button className='btn btn-black btn-wide' onClick={this.handleSave}>{saveLabel}</button>
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
  const { saved_artist_ids } = state.session;
  const artist = artists[ownProps.match.params.artistId] || {};
  const saves = state.session.saves || {};
  return {
    artist,
    savedArtistIds: saved_artist_ids,
    saves: Object.values(saves)
  };
};

const mdp = dispatch => {
  return {
    fetchArtist: id => dispatch(fetchArtist(id)),
    fetchCurrentSong: songId => dispatch(fetchCurrentSong(songId)),
    save: (saveId, saveType) => dispatch(save(saveId, saveType)),
    unsave: saveId => dispatch(unsave(saveId))
  };
};


export default connect(msp,mdp)(ArtistShow);
