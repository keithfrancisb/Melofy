import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../../../util/route_util';
import { currentUserPlaylists } from '../../../../reducers/selectors/playlist_selectors';
import PlaylistItem from './playlist_item';
import PlaylistItemShow from './p_collection_item_show';


class PlaylistCollection extends React.Component {

  componentDidMount(){
    this.props.fetchPlaylists();
  }

  render() {
    const playlists = this.props.currentUserPlaylists.map((playlist) => {
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

export default withRouter(connect(msp,mdp)(PlaylistCollection));
