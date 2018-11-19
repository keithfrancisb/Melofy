
export const currentUserPlaylists = (playlists, userId) => {

  return Object.values(playlists).filter(playlist => { return playlist.user_id === userId; });
};
