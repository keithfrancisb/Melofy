import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchAlbum } from '../../../actions/album_actions';
import { fetchCurrentSong } from '../../../actions/now_playing_actions';
import { save, unsave } from '../../../actions/save_actions';
import SongIndex from '../index/song/song_index';


class AlbumItemShow extends React.Component{

  constructor(props) {
    super(props);

    this.contextTrigger = null;

    this.playSong = this.playSong.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    const { savedAlbumIds, album } = this.props;
    if(savedAlbumIds.includes(album.id)){
      const saveId = this.props.saves.filter( (save) => {
        return save.saveable_id === this.props.album.id && save.saveable_type === 'Album';
      })[0].id;
      this.props.unsave(saveId);
    } else {
      this.props.save(album.id, 'Album');
    }
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  playSong(song) {
    const { fetchCurrentSong } = this.props;
    return () => {
      return fetchCurrentSong(song.id);
    };
  }

  render() {
    const { album } = this.props;
    const displayPhoto = album.image_url;

    if (!this.props.album.artist) return null;

    const saveLabel = this.props.savedAlbumIds.includes(album.id) ? 'Remove from your Library' : 'Save to your Library';

    return (
      <div>
        <div className='show-main-view'>
          <div className='content-scrolling'>
            <div className='content-spacing-playlist'>
              <section className='playlist-content'>
                <div className='playlist-info'>
                  <div className='hoverable-info'>
                    <div className='playlist-show-border'>
                      <div className='image-container'>
                        <img src={displayPhoto}></img>
                      </div>
                    </div>
                    <div className='playlist-label'>
                      <h2>{album.name}</h2>
                    </div>
                    <div className='playlist-label'>
                      <span>{album.artist.name}</span>
                    </div>
                  </div>
                  <div className='show-dot-div'>
                    <button onClick={this.handleSave}>
                      <span className='btn'>{saveLabel}</span>
                    </button>
                  </div>
                </div>
                <div className='playlist-songs'>
                  <SongIndex songIds={album.song_ids} parentId={album.id} />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

const msp = (state, ownProps) => {
  const { albums } = state.entities;
  const { saved_album_ids, saves } = state.session;

  const album = albums[ownProps.match.params.albumId] || {};
  return {
    album,
    savedAlbumIds: saved_album_ids,
    saves: Object.values(saves)
  };
};

const mdp = dispatch => {

  return {
    fetchAlbum: id => dispatch(fetchAlbum(id)),
    fetchCurrentSong: songId => dispatch(fetchCurrentSong(songId)),
    save: (saveId, saveType) => dispatch(save(saveId, saveType)),
    unsave: (saveId) => dispatch(unsave(saveId))
  };
};

export default connect(msp,mdp)(AlbumItemShow);
