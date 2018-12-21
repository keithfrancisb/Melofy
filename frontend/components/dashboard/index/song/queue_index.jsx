import React from 'react';
import SongItem from './song_item';
import SongIndex from './song_index';


class QueueIndex extends React.Component {

  constructor(props){
    super(props);

    this.renderQueue = this.renderQueue.bind(this);
    // this.renderSongList = this.renderSongList.bind(this);
  }

  renderQueue(){
    const { queue } = this.props;
    if(queue && queue.length !== 0){
      return (
        <>
          <h2 className='artist-subheaders sub-header'>Next in Queue</h2>
          <SongIndex songIds={queue.map( id => parseInt(id))} parentType='Queue'/>
        </>
      );
    }
  }

  // {this.renderSongList}
  render(){
    return (
      <div className='collection-main-view'>
        <div className='content-spacing'>
          <div className='content-scrolling'>
            <h1 className='artist-subheaders main-header'>Play Queue</h1>
            <h2 className='artist-subheaders sub-header'>Now Playing</h2>
            {this.renderQueue()}
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
