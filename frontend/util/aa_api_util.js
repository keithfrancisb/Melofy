
// --------------------- Album API ---------------------- //

export const fetchAlbums = (searchTerm, album_ids) => {
  if(album_ids && album_ids.length === 0) album_ids = [-1];
  return $.ajax({
    method: 'get',
    url: 'api/albums',
    data: {
      search_term : searchTerm,
      album_ids
    }
  });
};

export const fetchAlbum = (albumId) => {
  return $.ajax({
    method: 'get',
    url: `api/albums/${albumId}`
  });
};

// --------------------- Artist API ---------------------- //

export const fetchArtists = (searchTerm, artist_ids) => {
  if(artist_ids && artist_ids.length === 0) artist_ids = [-1];
  return $.ajax({
    method: 'get',
    url: 'api/artists',
    data: {
      search_term: searchTerm,
      artist_ids
    }
  });
};

export const fetchArtist = (artistId) => {
  return $.ajax({
    method: 'get',
    url: `api/artists/${artistId}`
  });
};
