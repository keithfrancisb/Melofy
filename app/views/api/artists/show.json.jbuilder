# json.partial! 'api/albums/album', album: @album, songs: @songs

# json.partial! 'api/artists/artist', artist: @artist, albums: @albums

json.artist do
  json.extract! @artist, :id, :name, :description, :image_url, :cover_url, :album_ids, :song_ids
end
