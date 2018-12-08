import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

export const PlaylistItem = (props) => {
  const { playlist, user, match } = props;
  const array = match.path.split('/');
  const tab = array[2];
  return (
    <li>
      <div className='pc-item'>
        <NavLink to={`/dashboard/${tab}/playlists/${playlist.id}`}>
          <img className='playlist-index-image' src={playlist.image_url}></img>
          <span className='playlist-span'>{`${user.first_name} ${user.last_name}`}</span>
        </NavLink>
      </div>
    </li>
  );
};

export default withRouter(PlaylistItem);
