import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

const AlbumItem = (props) => {
  const { album, artist, match } = props;
  const array = match.path.split('/');
  const tab = array[2];
  return (
    <li>
      <div className='pc-item'>
        <NavLink to={`/dashboard/albums/${album.id}`}>
          <img className='album-index-image' src={album.image_url}></img>
          <span className='album-span'>{album.name}</span>
          <span className='album-artist-span'>{artist.name}</span>
        </NavLink>
      </div>
    </li>
  );
};

export default withRouter(AlbumItem);
