import React from 'react';
import { connect } from 'react-redux';
import { addSongToPlaylist } from '../../../../util/ps_api_util';
import { fetchSongs } from '../../../../actions/song_actions';
import { fetchPlaylists } from '../../../../actions/playlist_actions';
import { currentUserPlaylists } from '../../../../reducers/selectors/playlist_selectors.js';
import SongItem from './song_item';
import PlaylistItem from '../../collection/p_collection/playlist_item';
import { fetchCurrentSong } from '../../../../actions/now_playing_actions';

class SongIndex extends React.Component {

  constructor(props) {
    super(props);

    this.state = { booleanToggle: false , songId: -1 };

    this.changeBooleanState = this.changeBooleanState.bind(this);
    this.setupAddToPlaylist = this.setupAddToPlaylist.bind(this);
    this.handleAddToPlaylist = this.handleAddToPlaylist.bind(this);
    this.playSong = this.playSong.bind(this);
  }

  componentDidMount(){
    const { searchTerm, song_ids } = this.props;
    this.props.fetchSongs(searchTerm, song_ids);
    // this.props.fetchPlaylists();
  }

  componentDidUpdate(prevProps) {
    debugger
    if(prevProps.searchTerm != this.props.searchTerm)
      this.props.fetchSongs(this.props.searchTerm);
  }

  changeBooleanState() {
    this.setState({ booleanToggle: !this.state.booleanToggle })
  }

  setupAddToPlaylist(songId) {
    return () => {
      this.setState({ booleanToggle: !this.state.booleanToggle, songId: songId });
    };
  }

  handleAddToPlaylist(playlistId, songId) {
    this.changeBooleanState();
    return () => this.props.addSongToPlaylist(playlistId, songId);
  }

  renderAddToPlaylist() {
    if(this.state.booleanToggle) {

      return (
        <div className='add-to-playlist'>
          <div className='new-playlist-container'>
            <div>
              <button onClick={this.changeBooleanState}>
                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>Close</title><path d="M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143" fill="#FFF" fillRule="evenodd"></path></svg>
              </button>
            </div>
            <div><h1 className='h1-add-to-playlist'>Add to playlist</h1></div>

          <ul>
            {this.props.playlists.map( playlist => {
              return (
                <li key={playlist.id}>
                  <div className='pc-item'>
                    <div onClick={this.handleAddToPlaylist(playlist.id,this.state.songId)}>
                      <img className='playlist-index-image' src={playlist.image_url}></img>
                      <span className='playlist-span'>{playlist.name}</span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          </div>
        </div>
      );
    }
  }


  playSong(song) {
    const { fetchCurrentSong } = this.props;
    return () => {
      return fetchCurrentSong(song);
    };
  }

  render() {
    // const { artists, albums } = this.props;
    const songs = this.props.songs.map((song) => {
      const { artist_id, album_id } = song;
      return (
        <SongItem playSong={this.playSong} key={song.id} setupAddToPlaylist={this.setupAddToPlaylist} song={song} artist={song.artist} album={song.album}/>
      );
    });
    return (
      <div className='main-songs'>
        {this.renderAddToPlaylist()}
        <div className='div-song-browse-list'>
          <ul className='song-list'>
            {songs}
          </ul>
        </div>
      </div>
    );
  }
}

const msp = ({entities, session}) => {
  const { songs, artists, albums, playlists } = entities;
  return {
    songs: Object.values(songs),
    // artists,
    // albums,
    // playlists: currentUserPlaylists(playlists, session.id)
  };
};

const mdp = dispatch => {
  return {
    fetchSongs: (searchTerm, song_ids) => dispatch(fetchSongs(searchTerm, song_ids)),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    addSongToPlaylist: (playlistId, songId) => addSongToPlaylist(playlistId, songId),
    fetchCurrentSong: (song) => dispatch(fetchCurrentSong(song))
  };
};

export default connect(msp,mdp)(SongIndex);
