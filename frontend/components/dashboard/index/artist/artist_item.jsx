import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

const ArtistItem = (props) => {
  const { artist, match } = props;
  const array = match.path.split('/');
  const tab = array[2];
  return (
    <li>
      <div className='pc-item'>
        <NavLink to={`/dashboard/artists/${artist.id}`}>
          <img className='artist-index-image' src={artist.image_url}></img>
          <span className='artist-name-span'>{artist.name}</span>
        </NavLink>
      </div>
    </li>
  );
};

export default withRouter(ArtistItem);
