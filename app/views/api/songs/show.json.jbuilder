
  json.extract! @song, :id, :name, :song_url

  json.artistName @artist_name
  
  json.albumName @album_name

  json.albumImage @album_image
