
export const currentUserPlaylists = (playlists, userId) => {
  debugger
  return Object.values(playlists).filter(playlist => { debugger; return playlist.user_id === userId; });
};
