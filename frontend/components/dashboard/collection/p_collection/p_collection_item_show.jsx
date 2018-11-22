import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Navlink, Redirect } from 'react-router-dom';
import { deletePlaylist } from '../../../../actions/playlist_actions';

class PlaylistItemShow extends React.Component{

  constructor(props){
    super(props);

    this.state = { changeBooleanState: false , songId: -1 };
    this.changeBooleanState = this.changeBooleanState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeBooleanState() {
    this.setState({ changeBooleanState: !this.state.changeBooleanState });
  }

  handleAddToPlaylist(playlistId, songId) {
    this.changeBooleanState();
    return () => this.props.addSongToPlaylist(playlistId, songId);
  }

  renderConfirmDelete() {
    if(this.state.changeBooleanState)
      return (
        <div className='delete-playlist'>
          <div className='new-playlist-container'>
            <div>
              <button onClick={this.changeBooleanState}>
                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>Close</title><path d="M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143" fill="#FFF" fillRule="evenodd"></path></svg>
              </button>
            </div>
            <div><h1 className='h1-new-playlist'>Do you really want to delete this playlist?</h1></div>

            <div className='button-group'>
              <button className='btn-cancel' onClick={this.changeBooleanState}>Cancel</button>
              <button className='btn-create' onClick={this.handleSubmit}>Delete</button>
            </div>
          </div>
        </div>
      );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.deletePlaylist(this.props.match.params.playlistId);
    this.changeBooleanState();
    this.props.history.push('/dashboard/collection/playlists');
  }


  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.playlistId);
  }

  renderSongList() {
    return (
      <ul className='ul-songs'>
        {this.props.songs.map( song => {
          const { name: songName, artist_id, album_id } = song;
          const { artists, albums } = this.props;
          return (
            <div key={song.id} className='div-song-list-item'>
              <li className='songs-list'>
                <div>
                  <div>
                    <span>{songName}</span>
                  </div>
                  <div className='sub-song-info'>
                    <span>{artists[artist_id].name}</span>
                    <span className="second-line-separator">•</span>
                    <span>{albums[album_id].name}</span>
                  </div>
                </div>
                <div className='dot-div'>
                  <button id='popup'>
                    <img className='song-misc-logo' src='https://s3.amazonaws.com/playlist-dev/icons/noun_dot_dot_dot_white.png'></img>
                  </button>
                  <div className='popupBox-song'>
                    <ul>
                      <li>
                        <span>Remove from this Playlist</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    );
  }

  render() {
    const { playlist, creatorName, songs } = this.props;
    const defaultImage = 'https://s3.amazonaws.com/playlist-dev/icons/no-image-playlist.png';
    const displayPhoto = playlist.image_url === defaultImage ? 'playlist-default-image' : 'playlist-show-image';

    return (
      <div>
        {this.renderConfirmDelete()}
        <div className='content-spacing-playlist'>
          <section className='playlist-content'>
            <div className='playlist-info'>
              <div className='hoverable-info'>
                <div className='playlist-show-border'>
                  <div className='image-container'>
                    <img className={displayPhoto} src={playlist.image_url}></img>
                  </div>
                </div>
                <div className='playlist-label'>
                  <h2>{playlist.name}</h2>
                </div>
                <div className='playlist-label'>
                  <span>{creatorName}</span>
                </div>
              </div>
              <div className='dot-div'>
                <button id='popup'>
                  <img className='misc-logo' src='https://s3.amazonaws.com/playlist-dev/icons/noun_dot_dot_dot_white.png'></img>
                </button>
                <div className='popupBox'>
                  <ul>
                    <li>
                      <span onClick={this.changeBooleanState}>Delete</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='playlist-songs'>
              {this.renderSongList()}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

const msp = ({entities},ownProps) => {
  const { playlists, songs, albums, artists, users } = entities;

  const playlistSongs = Object.values(songs);
  const playlist = playlists[ownProps.match.params.playlistId] || '';
  const creator = users[playlist.user_id] || '';
  let creatorName = '';
  if(creator)
    creatorName = `${users[playlist.user_id].first_name} ${users[playlist.user_id].last_name}`;
  return {
    songs: playlistSongs,
    playlist,
    creatorName,
    albums,
    artists
  };
};

const mdp = dispatch => {
  return {
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    deletePlaylist: id => dispatch(deletePlaylist(id))
  };
};

export default withRouter(connect(msp,mdp)(PlaylistItemShow));
