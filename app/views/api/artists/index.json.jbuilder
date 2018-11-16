# @albums.each do |album|
#   json.set! album.id do
#     json.partial! 'api/albums/album', album: album, songs: nil
#   end
# end

@artists.each do |artist|
  json.set! artist.id do
    json.partial! 'api/artists/artist', artist: artist, albums: nil
  end
end
