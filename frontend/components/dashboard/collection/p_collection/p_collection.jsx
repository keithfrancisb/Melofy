import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { currentUserPlaylists } from '../../../../reducers/selectors/playlist_selectors';
import PCollectionItem from './p_collection_item';

class PlaylistCollection extends React.Component {

  componentDidMount(){
    this.props.fetchPlaylists();
  }

  render() {
    const playlists = this.props.currentUserPlaylists.map((playlist) => {
      return (
        <PCollectionItem key={playlist.id} playlist={playlist} />
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

const msp = ({entities,session},ownProps) => {
  const myPlaylists = currentUserPlaylists(entities.playlists, session.id);
  return {
    currentUserPlaylists: myPlaylists
  };
};

const mdp = dispatch => {
  return {
    fetchPlaylists: () => dispatch(fetchPlaylists())
  };
};

export default connect(msp,mdp)(PlaylistCollection);
