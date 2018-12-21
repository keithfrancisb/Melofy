import React from 'react';
import SongItem from './song_item';
import SongIndex from './song_index';


class QueueIndex extends React.Component {

  constructor(props){
    super(props);

    this.renderNowPlaying = this.renderNowPlaying.bind(this);
    this.renderQueue = this.renderQueue.bind(this);
    this.renderSongList = this.renderSongList.bind(this);
  }

  renderNowPlaying(){
    const { nowPlaying } = this.props;
    if(nowPlaying)
      return (
        <div>
          <h2 className='artist-subheaders sub-header'>Now Playing</h2>
          <SongItem
            key={nowPlaying.id}
            song={nowPlaying}
            artist={nowPlaying.artist}
            album={nowPlaying.album}
            parentType='Queue'
            />
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
          <h2 className='artist-subheaders sub-header'>Next in Queue</h2>
          <SongIndex songIds={songList.map( id => parseInt(id))} parentType='Queue'/>
        </div>
      );
    }
  }

  render(){
    return (
      <div className='collection-main-view'>
        <div className='content-spacing'>
          <div className='content-scrolling'>
            <h1 className='artist-subheaders main-header'>Play Queue</h1>
            <h2 className='artist-subheaders sub-header'>Now Playing</h2>
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
    songList,
    queue,
    nowPlaying
  };
};




export default QueueIndex;
