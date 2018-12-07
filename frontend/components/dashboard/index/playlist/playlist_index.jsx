import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlaylistItem from './playlist_item';


class PlaylistIndex extends React.Component {

  componentDidMount(){
    this.props.fetchPlaylists();
  }

  render() {
    const playlists = this.props.playlists.map((playlist) => {
      return (
        <PlaylistItem key={playlist.id} playlist={playlist} />
      );
    });
    return (
      <div>
        <ul className='playlist-list'>
          {playlists}
        </ul>
      </div>
    );
  }
}

const msp = ({entities}) => {
  const { playlists } = entities;
  return {
    playlists: Object.values(playlists)
  };
};

const mdp = dispatch => {
  return {
    fetchPlaylists: () => dispatch(fetchPlaylists())
  };
};

export default connect(msp,mdp)(PlaylistIndex);
