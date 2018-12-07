# json.partial! 'api/albums/album', album: @album, songs: @songs

# json.partial! 'api/artists/artist', artist: @artist, albums: @albums

json.extract! artist, :id, :name, :description, :image_url, :album_ids, :song_ids
