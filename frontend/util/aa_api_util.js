
// --------------------- Album API ---------------------- //

export const fetchAlbums = () => {
  return $.ajax({
    method: 'get',
    url: 'api/albums'
  });
};

export const fetchAlbum = (albumId) => {
  return $.ajax({
    method: 'get',
    url: `api/albums/${albumId}`
  });
};

// --------------------- Artist API ---------------------- //

export const fetchArtists = () => {
  return $.ajax({
    method: 'get',
    url: 'api/artists'
  });
};

export const fetchArtist = (artistId) => {
  return $.ajax({
    method: 'get',
    url: `api/artists/${artistId}`
  });
};
