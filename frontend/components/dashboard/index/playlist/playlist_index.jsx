import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlaylistItem from './playlist_item';


class PlaylistIndex extends React.Component {

  componentDidMount(){
    const { searchTerm, playlist_ids } = this.props;
    this.props.fetchPlaylists(searchTerm, playlist_ids);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.searchTerm != this.props.searchTerm)
      this.props.fetchPlaylists(this.props.searchTerm);
  }

  render() {
    const playlists = this.props.playlists.map((playlist) => {
      return (
        <PlaylistItem key={playlist.id} playlist={playlist} user={playlist.user}/>
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
    fetchPlaylists: (searchTerm, playlist_ids) => dispatch(fetchPlaylists(searchTerm, playlist_ids))
  };
};

export default connect(msp,mdp)(PlaylistIndex);
