import React from 'react';
import { NavLink } from 'react-router-dom';

export const PlaylistItem = (props) => {
  const { playlist } = props;
  return (
    <li>
      <div className='pc-item'>
        <NavLink to={`/dashboard/browse/playlists/${playlist.id}`}>
          <img className='playlist-index-image' src={playlist.image_url}></img>
          <span className='playlist-span'>{playlist.name}</span>
        </NavLink>
      </div>
    </li>
  );
};

const msp = (state,ownProps) => {
  const { user_id } = ownProps.playlist;
  const { users } = state;
  return {
    creator: `${users[user_id].first_name} ${users[user_id].last_name}`
  };
};

export default PlaylistItem;
