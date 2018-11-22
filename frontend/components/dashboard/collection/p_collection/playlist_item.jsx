import React from 'react';
import { NavLink } from 'react-router-dom';

const PlaylistItem = (props) => {
  const { playlist } = props
  return (
    <li>
      <div className='pc-item'>
        <NavLink to={`/dashboard/collection/playlists/${playlist.id}`}>
          <img className='playlist-index-image' src={playlist.image_url}></img>
          <span className='playlist-span'>{playlist.name}</span>
        </NavLink>
      </div>
    </li>
  );
};


export default PlaylistItem;
