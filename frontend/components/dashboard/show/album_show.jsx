import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchAlbum } from '../../../actions/album_actions';
import { fetchCurrentSong } from '../../../actions/now_playing_actions';
import SongIndex from '../index/song/song_index';


class AlbumItemShow extends React.Component{

  constructor(props) {
    super(props);

    this.playSong = this.playSong.bind(this);
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  toggleDropdown(id) {
    return () => {
      document.getElementById(`dropDown${id}`).classList.toggle('show');
      window.songId = id;
    };
  }

  playSong(song) {
    const { fetchCurrentSong } = this.props;
    return () => {
      return fetchCurrentSong(song);
    };
  }

  // renderSongList() {
  //   return (
  //     <ul className='ul-songs'>
  //       {this.props.songs.map( song => {
  //         const { name: songName, artist, album } = song;
  //         const { artist, album } = this.props;
  //         return (
  //           <div key={song.id} className='div-song-list-item' onDoubleClick={this.playSong(song)}>
  //             <li className='songs-list'>
  //               <div>
  //                 <div>
  //                   <span>{songName}</span>
  //                 </div>
  //                 <div className='sub-song-info'>
  //                   <span>{artist.name}</span>
  //                   <span className="second-line-separator">•</span>
  //                   <span>{album.name}</span>
  //                 </div>
  //               </div>
  //               <div className='dot-div'>
  //                 <button id='popup' onClick={this.toggleDropdown(song.id)} className={`button${song.id}`}>
  //                   <img className='song-misc-logo' src='https://s3.amazonaws.com/playlist-dev/icons/noun_dot_dot_dot_white.png'></img>
  //                 </button>
  //                 <div id={`dropDown${song.id}`} className='popupBox-song'>
  //                   <ul>
  //                     <li>
  //                       <span>Remove from playlist</span>
  //                     </li>
  //                   </ul>
  //                 </div>
  //               </div>
  //             </li>
  //           </div>
  //         );
  //       })}
  //     </ul>
  //   );
  // }


  render() {
    const { album } = this.props;
    const displayPhoto = album.image_url;

    if (!this.props.album.artist) return null;

    return (
      <div>
        <div className='content-spacing-playlist'>
          <section className='playlist-content'>
            <div className='playlist-info'>
              <div className='hoverable-info'>
                <div className='playlist-show-border'>
                  <div className='image-container'>
                    <img className={displayPhoto} src={displayPhoto}></img>
                  </div>
                </div>
                <div className='playlist-label'>
                  <h2>{album.name}</h2>
                </div>
                <div className='playlist-label'>
                  <span>{album.artist.name}</span>
                </div>
              </div>
              <div className='dot-div'>
                <button id='popup' onClick={this.toggleDropdown(album.id)} className={`button${album.id}`}>
                  <img className='misc-logo' src='https://s3.amazonaws.com/playlist-dev/icons/noun_dot_dot_dot_white.png'></img>
                </button>
                <div id={`dropDown${album.id}`} className='popupBox'>
                  <ul>
                    <li>
                      <span>Save</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='playlist-songs'>
              <SongIndex songIds={album.song_ids} parentId={album.id} />
            </div>
          </section>
        </div>
      </div>
    );
  }

  // {this.renderSongList()}

}

// Close the dropdown menu if the user clicks outside of it
window.onclick = (event) => {
  if (!event.target.matches(`button${window.songId}`)) {

    const dropdowns = document.getElementsByClassName("popupBox-song");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show') && openDropdown.id !== `dropDown${window.songId}`) {
        openDropdown.classList.remove('show');
      }
    }
  }
};


const msp = (state, ownProps) => {
  const { albums } = state.entities;

  const album = albums[ownProps.match.params.albumId] || {};
  return {
    album,
  };
};

const mdp = dispatch => {

  return {
    fetchAlbum: id => dispatch(fetchAlbum(id)),
    fetchCurrentSong: song => dispatch(fetchCurrentSong(song))
  };
};

export default connect(msp,mdp)(AlbumItemShow);
