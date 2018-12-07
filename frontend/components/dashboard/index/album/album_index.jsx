import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AlbumItem from './album_item';
import { fetchAlbums } from '../../../../actions/album_actions';

class AlbumIndex extends React.Component {

  componentDidMount(){
    this.props.fetchAlbums();
  }

  render() {
    const { artists } = this.props;
    const albums = this.props.albums.map((album) => {
      const artist = artists[album.artist_id];
      return (
        <AlbumItem key={album.id} album={album} artist={artist}/>
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
    artists: artists
  };
};

const mdp = dispatch => {
  return {
    fetchAlbums: () => dispatch(fetchAlbums()),
  };
};

export default connect(msp,mdp)(AlbumIndex);
