import React from 'react';
import { NavLink } from 'react-router-dom';
import Browse from './browse/browse';
import Search from './search/search';
import Collection from './collection/collection';
import { ProtectedRoute } from '../../util/route_util';

import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      playbackButton: 'https://s3.amazonaws.com/playlist-dev/icons/music+player/noun_play+button_895200.png',
      volume: 50
     };

    this.updateProgressBar = this.updateProgressBar.bind(this);
    this.togglePlayPause = this.togglePlayPause.bind(this);
    this.updateVolume = this.updateVolume.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.nowPlaying.id !== this.props.nowPlaying.id){
      const player = document.getElementById('music-player');
      player.load();
      this.togglePlayPause();
    }
  }

  togglePlayPause() {
    const player = document.getElementById('music-player');

    const newIcon = player.paused ? 'https://s3.amazonaws.com/playlist-dev/icons/music+player/noun_pause+button_895204.png' :
      'https://s3.amazonaws.com/playlist-dev/icons/music+player/noun_play+button_895200.png';

    this.setState({ playbackButton: newIcon });
    player.paused ? player.play() : player.pause();
  }

  updateProgressBar() {
    const bar = document.getElementById('progress-bar');
    const player = document.getElementById('music-player');

    const newValue = (player.currentTime / player.duration) * 100;
    this.setState({ progress: newValue });
  }

  updateCurrentTime() {
    const player = document.getElementById('music-player');

    if(player) {
      const currentTime = player.currentTime;

      const current_hour = parseInt(currentTime / 3600) % 24;
      const current_minute = parseInt(currentTime / 60) % 60;
      const current_seconds_long = currentTime % 60;
      const current_seconds = current_seconds_long.toFixed();
      const current_time = (current_minute < 10 ? "0" + current_minute :
        current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);

      return current_time;
    }
  }

  renderTotalTime() {
    const player = document.getElementById('music-player');

    if(player) {
      const duration = player.duration;

      const minutes = Math.floor(duration / 60);
      const seconds_int = duration - minutes * 60;
      const seconds_str = seconds_int.toString();
      const seconds = seconds_str.substr(0, 2);
      const totalTime = `${minutes}:${seconds}`;

      return minutes && seconds ? totalTime : '--:--';
    }
  }

  updateVolume(e) {
    this.setState({ volume: e.target.value });
    document.getElementById('music-player').volume = this.state.volume / 100;
  }

  renderNowPlayingInfo() {
    if(this.props.nowPlaying.name) {
      const { name, artistName, albumName, albumImage } = this.props.nowPlaying;
      return (
        <div className='now-playing-bar-left'>
          <div className='album-image-player'>
            <img src={albumImage}></img>
          </div>
          <div className='song-artist-info-bar'>
            <div className='song-name-player'><span>{name}</span></div>
            <div className='artist-name-player'><span>{artistName}</span></div>
          </div>
        </div>
      );
    }
  }

  render(){
    const { currentUser, logout, albums, artists } = this.props;
    return (
      <div className='collection-main'>
        <nav className='sidebar'>
          <div>
            <h2>Melofy</h2>
            <ul className='three-musketeers'>
              <li>
                <div>
                <NavLink activeClassName='green' to='/dashboard/search'>
                  <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z" fill="currentColor" fillRule="evenodd"></path></svg>
                  <span className='three-musketeers-text'>Search</span>
                </NavLink>
                </div>
              </li>
              <li>
                <div>
                  <NavLink activeClassName='green' to='/dashboard/browse'>
                    <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z" fill="currentColor"></path></svg>
                    <span className='three-musketeers-text'>Home</span>
                  </NavLink>
                </div>
              </li>
              <li>
                <div>
                  <NavLink activeClassName='green' to='/dashboard/collection'>
                    <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M311.873 77.46l166.349 373.587-39.111 17.27-166.349-373.587zM64 463.746v-384h42.666v384h-42.666zM170.667 463.746v-384h42.667v384h-42.666z" fill="currentColor"></path></svg>
                    <span className='three-musketeers-text'>Your Library</span>
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>

          <ul className='current-user-info'>
            <li><button onClick={logout}>Log Out</button></li>
            <div className='super-mini-divider'/>
            <li>{currentUser.first_name} {currentUser.last_name}</li>
          </ul>
        </nav>

        <div className='now-playing-bar'>
          <footer className='footer-player-bar'>
              {this.renderNowPlayingInfo()}
            <div className='now-playing-bar-center'>
              <div className='player-controls'>
                <button className='shuffle'>
                  <img src='https://s3.amazonaws.com/playlist-dev/icons/music+player/noun_Shuffle_2052748.png'></img>
                </button>
                <button>
                  <img src='https://s3.amazonaws.com/playlist-dev/icons/music+player/noun_previous_899259.png'></img>
                </button>
                <button onClick={this.togglePlayPause}>
                  <img src={this.state.playbackButton}></img>
                </button>
                <button>
                  <img src='https://s3.amazonaws.com/playlist-dev/icons/music+player/noun_skip+track_899260.png'></img>
                </button>
                <button className='repeat'>
                  <img src='https://s3.amazonaws.com/playlist-dev/icons/music+player/noun_Repeat_1155556.png'></img>
                </button>
                <audio id='music-player' onTimeUpdate={this.updateProgressBar} volume={this.state.volume} src={this.props.nowPlaying.song_url}>
                </audio>
              </div>
              <div className='playback-bar'>
                <div className='current-time'>{this.updateCurrentTime()}</div>
                <div className='progress-bar'>
                  <progress id='progress-bar' value={this.state.progress} max='100'></progress>
                </div>
                <div className='end-time'>{this.renderTotalTime()}</div>
              </div>
            </div>
            <div className='now-playing-bar-right'>
              <div className='volume-icon'></div>
              <div className='volume-bar'>
                <input id='volume' type='range' min='0' max='100' step='1' defaultValue='100' onChange={this.updateVolume}/>
              </div>
            </div>
          </footer>
        </div>
        <ProtectedRoute path='/dashboard/search' component={Search}/>
        <ProtectedRoute path='/dashboard/browse' component={Browse}/>
        <ProtectedRoute path='/dashboard/collection' component={Collection}/>
      </div>

    );
  }
}

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    albums: state.entities.albums,
    artists: state.entities.artists,
    nowPlaying: state.nowPlaying
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(msp,mdp)(Dashboard);
