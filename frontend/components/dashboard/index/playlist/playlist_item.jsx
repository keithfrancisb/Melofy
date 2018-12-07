import React from 'react';
import { NavLink } from 'react-router-dom';

export const PlaylistItem = (props) => {
  const { playlist, user } = props;
  return (
    <li>
      <div className='pc-item'>
        <NavLink to={`/dashboard/browse/playlists/${playlist.id}`}>
          <img className='playlist-index-image' src={playlist.image_url}></img>
          <span className='playlist-span'>{`${user.first_name} ${user.last_name}`}</span>
        </NavLink>
      </div>
    </li>
  );
};

export default PlaylistItem;
