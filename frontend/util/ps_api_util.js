
// --------------------- Playlist API ---------------------- //

export const createPlaylist = (playlist) => {
  return $.ajax({
    method: 'post',
    url: 'api/playlists',
    data: { playlist }
  });
};

export const updatePlaylist = (playlist) => {
  return $.ajax({
    method: 'patch',
    url: `api/playlists/${playlist.id}`,
    data: { playlist }
  });
};

export const deletePlaylist = (playlistId) => {
  return $.ajax({
    method: 'delete',
    url: `api/playlists/${playlistId}`
  });
};

// -------------------- Song API --------------------------- //

export const addSongToPlaylist = (playlistId, songId) => {
  return $.ajax({
    method: 'post',
    url: `api/playlists/${playlistId}/songs`,
    data: {songId}
  });
};

export const removeSongFromPlaylist = (playlistId, songId) =>{
  return $.ajax({
    method: 'delete',
    url: `api/playlists/${playlistId}/songs/${songId}`
  });
};
