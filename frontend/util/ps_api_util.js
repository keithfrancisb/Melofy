
// --------------------- Playlist API ---------------------- //

export const fetchPlaylists = (searchTerm, playlist_ids) => {
  return $.ajax({
    method: 'get',
    url: 'api/playlists',
    data: {
      search_term: searchTerm,
      playlist_ids
    }
  });
};

// Used for collecting Playlist info and list of songs
export const fetchPlaylist = id => {
  return $.ajax({
    method: 'get',
    url: `api/playlists/${id}`
  });
};

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

export const fetchPlaylistSongs = (playlistId) => {
  return $.ajax({
    method: 'get',
    url: `api/playlists/${playlistId}/songs`
  });
};

export const fetchSongs = (searchTerm, song_ids) => {
  return $.ajax({
    method: 'get',
    url: 'api/songs',
    data: {
      search_term: searchTerm,
      song_ids
    }
  });
};

export const fetchSong = (songId) => {
  return $.ajax({
    method: 'get',
    url: `api/songs/${songId}`
  });
};

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
