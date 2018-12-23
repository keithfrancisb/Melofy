import React from 'react';
import { connect } from 'react-redux';
import SongItem from './song_item';
import SongIndex from './song_index';
import { fetchSongs } from '../../../../actions/song_actions';

class QueueIndex extends React.Component {

  constructor(props){
    super(props);

    // this.state = {
    //   nowPlaying: Object.values(this.props.songs).filter( song => this.props.nowPlaying.id === song.id),
    //   queue: Object.value(this.props.songs).filter( song => this.props.queue.includes(`${song.id}`)),
    //   songList:Object.values(this.props.songs).filter( song => this.props.songList.includes(`${song.id}`))
    // };

    this.renderNowPlaying = this.renderNowPlaying.bind(this);
    this.renderQueue = this.renderQueue.bind(this);
    this.renderSongList = this.renderSongList.bind(this);
  }

  componentDidMount(){
    const { nowPlaying, queue, songList } = this.props;
    let list = Object.keys(nowPlaying).length !== 0 ? songList.concat(queue).concat(`${nowPlaying.id}`) : songList.concat(queue);
    list = [...new Set(list)];
    this.props.fetchSongs(null, list);
  }

  componentDidUpdate(prevProps){
    if(prevProps.nowPlaying.id !== this.props.nowPlaying.id){
      // debugger
      const { nowPlaying, queue, songList } = this.props;
      let list = Object.keys(nowPlaying).length !== 0 ? songList.concat(queue).concat(`${nowPlaying.id}`) : songList.concat(queue);
      list = [...new Set(list)];
      this.props.fetchSongs(null, list);
    }
  }

  renderNowPlaying(){
    const { nowPlaying } = this.props;
    debugger
    if(nowPlaying)
      return (
        <div>
          <h2 className='artist-subheaders sub-header'>Now Playing</h2>
          <SongIndex songIds={[nowPlaying.id]} parentType='Queue'/>
        </div>
      );
  }

  renderQueue(){
    const { queue } = this.props;
    if(queue && queue.length !== 0){
      return (
        <div>
          <h2 className='artist-subheaders sub-header'>Next in Queue</h2>
          <SongIndex songIds={queue.map( id => parseInt(id))} parentType='Queue'/>
        </div>
      );
    }
  }

  renderSongList(){
    const { songList } = this.props;
    if(songList && songList.length !== 0){
      return (
        <div>
          <h2 className='artist-subheaders sub-header'>Next Up</h2>
          <SongIndex songIds={songList.map( id => parseInt(id))} parentType='Queue'/>
        </div>
      );
    }
  }

  render(){
    return (
      <div className='collection-main-view'>
        <div className='content-scrolling'>
          <div className='content-spacing'>
            <h1 className='artist-subheaders main-header'>Play Queue</h1>
            {this.renderNowPlaying()}
            {this.renderQueue()}
            {this.renderSongList()}
          </div>
        </div>
      </div>
    );
  }
}

const msp = state => {
  const { songList, queue, nowPlaying } = state.ui.queue;
  return {
    songs: state.entities.songs,
    songList,
    queue,
    nowPlaying
  };
};

const mdp = dispatch => {
  return {
    fetchSongs: (searchTerm, songIds) => dispatch(fetchSongs(searchTerm,songIds))
  };
};


export default connect(msp, mdp)(QueueIndex);
