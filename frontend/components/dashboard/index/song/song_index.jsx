import React from 'react';
import { connect } from 'react-redux';
import { addSongToPlaylist, removeSongFromPlaylist } from '../../../../actions/song_actions';
import { fetchSongs } from '../../../../actions/song_actions';
import { fetchPlaylists } from '../../../../actions/playlist_actions';
import { currentUserPlaylists } from '../../../../reducers/selectors/playlist_selectors.js';
import SongItem from './song_item';
import PlaylistItem from '../playlist/playlist_item';

import { receiveCurrentSong, receiveCurrentSongList } from '../../../../actions/queue_actions';

class SongIndex extends React.Component {

  constructor(props) {
    super(props);

    this.state = { booleanToggle: false , songId: -1 };

    this.changeBooleanState = this.changeBooleanState.bind(this);
    this.setupAddToPlaylist = this.setupAddToPlaylist.bind(this);
    this.handleAddToPlaylist = this.handleAddToPlaylist.bind(this);
    this.handleRemoveFromPlaylist = this.handleRemoveFromPlaylist.bind(this);
    this.playSong = this.playSong.bind(this);
  }

  componentDidMount(){
    const { searchTerm, songIds } = this.props;
    this.props.fetchSongs(searchTerm, songIds);
    this.props.fetchPlaylists();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.songIds && (prevProps.searchTerm !== this.props.searchTerm ||
      prevProps.songIds.length !== this.props.songIds.length))
      this.props.fetchSongs(this.props.searchTerm, this.props.songIds);
  }

  changeBooleanState() {
    this.setState({ booleanToggle: !this.state.booleanToggle });
  }

  setupAddToPlaylist(songId) {
    return () => {
      this.setState({ booleanToggle: !this.state.booleanToggle, songId: songId });
    };
  }

  handleAddToPlaylist(playlistId, songId) {
    return () => {
      this.changeBooleanState();
      this.props.addSongToPlaylist(playlistId, songId);
    };
  }

  handleRemoveFromPlaylist(playlistId, songId) {
    return () => {
      this.props.removeSongFromPlaylist(playlistId, songId)
    };
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

          <ul className='add-playlist-ul'>
            {this.props.playlists.map( playlist => {
              return (
                <li key={playlist.id}>
                  <div className='pc-item'>
                    <div onClick={this.handleAddToPlaylist(playlist.id,this.state.songId)}>
                      <img className='playlist-index-image' src={playlist.image_url}></img>
                      <span className='playlist-name-span'>{playlist.name}</span>
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
    const { receiveCurrentSong, receiveCurrentSongList } = this.props;
    return () => {
      receiveCurrentSong(song);
      return receiveCurrentSongList(window.sessionStorage.songs);
    };
  }

  render() {
    const songs = this.props.songs.map((song) => {
      return (
        <SongItem
          playSong={this.playSong}
          key={song.id}
          setupAddToPlaylist={this.setupAddToPlaylist}
          handleRemoveFromPlaylist={this.handleRemoveFromPlaylist}
          song={song}
          artist={song.artist}
          album={song.album}
          parentId={this.props.parentId}
          parentType={this.props.parentType}
          allowRemoveSong={this.props.allowRemoveSong}/>
      );
    });
    return (
      <div className='main-songs'>
        {this.renderAddToPlaylist()}
        <div className={this.props.parentId ? 'song-index-div' : 'div-song-browse-list'}>
          <ul className='song-list'>
            {songs}
          </ul>
        </div>
      </div>
    );
  }
}

const msp = ({entities, session}) => {
  const { songs, playlists } = entities;
  const { saved_song_ids } = session;
  window.sessionStorage.songs = songs;
  debugger
  return {
    songs: Object.values(songs),
    playlists: currentUserPlaylists(playlists, session.id),
    savedSongIds: saved_song_ids
  };
};

const mdp = dispatch => {
  return {
    fetchSongs: (searchTerm, song_ids) => dispatch(fetchSongs(searchTerm, song_ids)),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    addSongToPlaylist: (playlistId, songId) => dispatch(addSongToPlaylist(playlistId, songId)),
    removeSongFromPlaylist: (playlistId, songId) => dispatch(removeSongFromPlaylist(playlistId, songId)),
    receiveCurrentSong: song => dispatch(receiveCurrentSong(song)),
    receiveCurrentSongList: songs => dispatch(receiveCurrentSongList(songs))
  };
};

export default connect(msp,mdp)(SongIndex);
