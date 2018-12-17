import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Navlink, Redirect, Link } from 'react-router-dom';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import { deletePlaylist } from '../../../actions/playlist_actions';
import { fetchCurrentSong } from '../../../actions/queue_actions';
import { save, unsave } from '../../../actions/save_actions';
import { fetchCurrentUser } from '../../../actions/session_actions';
import SongIndex from '../index/song/song_index';

class PlaylistItemShow extends React.Component{

  constructor(props){
    super(props);

    this.state = { changeBooleanState: false , songId: -1 };

    this.contextTrigger = null;

    this.changeBooleanState = this.changeBooleanState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.renderOptions = this.renderOptions.bind(this);

  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.playlistId);
  }

  changeBooleanState() {
    this.setState({ changeBooleanState: !this.state.changeBooleanState });
  }

  toggleMenu(e) {
    if(this.contextTrigger)
      this.contextTrigger.handleContextClick(e);
  }

  handleSave() {
    const { savedPlaylistIds, playlist } = this.props;
    if(savedPlaylistIds.includes(playlist.id)){
      const saveId = this.props.saves.filter( (save) => {
        return save.saveable_id === this.props.playlist.id && save.saveable_type === 'Playlist';
      })[0].id;
      this.props.unsave(saveId);
    } else {
      this.props.save(playlist.id, 'Playlist');
    }
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
    this.props.deletePlaylist(this.props.match.params.playlistId, this.props.currentUserId);
    this.changeBooleanState();
    this.props.history.push('/dashboard/browse/playlists');
  }

  renderOptions(){
    const saveLabel = this.props.savedPlaylistIds.includes(this.props.playlist.id) ? 'Remove from your Library' : 'Save to your Library';
    let result;
    if(this.props.createdPlaylistIds.includes(this.props.playlist.id)){
      result = (
        <div>
          <div className='show-dot-div'>
            <ContextMenuTrigger id={`${this.props.playlist.id}`} ref={c => this.contextTrigger = c}>
              <button onClick={this.toggleMenu}>
                <img className='misc-logo' src='https://s3.amazonaws.com/playlist-dev/icons/noun_dot_dot_dot_white.png'></img>
              </button>
            </ContextMenuTrigger>
          </div>

          <>
          <ContextMenu id={`${this.props.playlist.id}`}>
            <MenuItem>
              <span onClick={this.changeBooleanState}>Delete Playlist</span>
            </MenuItem>
          </ContextMenu>
          </>
      </div>
      );
    } else {
      result = (
        <div className='show-dot-div'>
          <button onClick={this.handleSave}>
            <span className='btn'>{saveLabel}</span>
          </button>
        </div>
      );
    }

    return (
      <>
      {result}
      </>
    );
  }

  render() {

    if (!this.props.playlist.user) return null;

    const { playlist } = this.props;
    const defaultImage = 'https://s3.amazonaws.com/playlist-dev/icons/noun_music+playlist_1058814.png';
    const displayPhoto = playlist.image_url === defaultImage ? 'playlist-default-image' : 'playlist-show-image';
    const allowRemoveSong = playlist.user_id === this.props.currentUserId;

    let renderIndex;
    if(playlist.song_ids.length !== 0){
      renderIndex = (
        <div className='playlist-songs'>
          <SongIndex songIds={playlist.song_ids} parentId={playlist.id} parentType={'Playlist'} allowRemoveSong={allowRemoveSong}/>
        </div>
      );
    } else {
      renderIndex = (
        <div className="empty-playlist-container">
          <div className="empty-playlist-icon">
            <svg width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg"><title>Album</title><path d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z" fill="currentColor" fillRule="evenodd"></path></svg>
          </div>
          <div>
            <h1 className="empty-playlist-header">It's a bit empty here...</h1>
          </div>
          <div>
            <h4 className="empty-playlist-subheader">Find more of the music you love down below</h4>
          </div>
          <div>
            <Link to='/dashboard/browse' className="btn browse-btn">Browse</Link>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className='playlist-show-view'>
          <div className='content-scrolling'>
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
                      <span>{`${playlist.user.first_name} ${playlist.user.last_name}`}</span>
                    </div>
                  </div>
                  {this.renderOptions()}
                </div>
                {renderIndex}
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const msp = ({entities, session},ownProps) => {
  const { playlists } = entities;

  const playlist = playlists[ownProps.match.params.playlistId] || {};
  return {
    playlist,
    savedPlaylistIds: session.saved_playlist_ids,
    saves: Object.values(session.saves),
    createdPlaylistIds: session.playlist_ids,
    currentUserId: session.id
  };
};

const mdp = dispatch => {
  return {
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    deletePlaylist: (playlistId, userId) => dispatch(deletePlaylist(playlistId))
      .then( () => dispatch(fetchCurrentUser(userId))),
    save: (saveId, saveType) => dispatch(save(saveId, saveType)),
    unsave: (saveId) => dispatch(unsave(saveId)),
  };
};

export default withRouter(connect(msp,mdp)(PlaylistItemShow));
