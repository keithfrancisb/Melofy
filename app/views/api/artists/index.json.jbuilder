# @albums.each do |album|
#   json.set! album.id do
#     json.partial! 'api/albums/album', album: album, songs: nil
#   end
# end

json.artists do
  @artists.each do |artist|
    json.set! artist.id do
      # json.partial! 'api/artists/artist', artist: artist, albums: nil
      json.extract! artist, :id, :name, :description, :image_url, :album_ids, :song_ids
    end
  end
end
