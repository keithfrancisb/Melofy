import React from 'react';
import { NavLink } from 'react-router-dom';

const AlbumItem = (props) => {
  const { album, artist } = props;
  return (
    <li>
      <div className='pc-item'>
        <NavLink to={`/dashboard/browse/albums/${album.id}`}>
          <img className='album-index-image' src={album.image_url}></img>
          <span className='album-span'>{album.name}</span>
          <span className='album-artist-span'>{artist.name}</span>
        </NavLink>
      </div>
    </li>
  );
};

export default AlbumItem;
