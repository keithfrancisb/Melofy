import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AlbumItem from './album_item';
import { fetchAlbums } from '../../../../actions/album_actions';

class AlbumIndex extends React.Component {

  componentDidMount(props){
    const { searchTerm, album_ids } = this.props;
    this.props.fetchAlbums(searchTerm, album_ids);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.searchTerm != this.props.searchTerm)
      this.props.fetchAlbums(this.props.searchTerm);
  }

  render() {
    // const { artists } = this.props;
    const albums = this.props.albums.map((album) => {

      return (
        <AlbumItem key={album.id} album={album} artist={album.artist}/>
      );
    });
    return (
      <div>
        <ul className='playlist-list'>
          {albums}
        </ul>
      </div>
    );
  }
}

const msp = ({entities}) => {
  const { albums, artists } = entities;
  return {
    albums: Object.values(albums),
    // artists: artists
  };
};

const mdp = dispatch => {
  return {
    fetchAlbums: (searchTerm, album_ids) => dispatch(fetchAlbums(searchTerm, album_ids)),
  };
};

export default connect(msp,mdp)(AlbumIndex);
