import React from 'react';
import { NavLink } from 'react-router-dom';

const ArtistItem = (props) => {
  const { artist } = props;
  return (
    <li>
      <div className='pc-item'>
        <NavLink to={`/dashboard/browse/artists/${artist.id}`}>
          <img className='artist-index-image' src={artist.image_url}></img>
          <span className='playlist-span'>{artist.name}</span>
        </NavLink>
      </div>
    </li>
  );
};

export default ArtistItem;
