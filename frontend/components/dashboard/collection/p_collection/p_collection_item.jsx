import React from 'react';


export const PCollectionItem = (props) => {
  const { playlist } = props
  // playlist.image_url = '../../../../apps/assets/images/minimalism_spotify.jpg';
  return (
    <li>
      <div className='pc-item'>
        <img className='playlist-image' src={window.staticImages.playlist}></img>
        <span className='playlist-span'>{playlist.name}</span>
      </div>
    </li>
  );
};

const msp = (state,ownProps) => {
  debugger
  const { user_id } = ownProps.playlist;
  const { users } = state;
  return {
    creator: `${users[user_id].first_name} ${users[user_id].last_name}`
  };
};

export default PCollectionItem;
