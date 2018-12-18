# albums = []
# artists = []
json.songs do
  @songs.each do |song|
    # albums << song.album unless albums.include?(song.album)
    # artists << song.artist unless artists.include?(song.artist)

    json.set! song.id do
      json.extract! song, :id, :name, :artist_id, :album_id, :song_url, :duration, :playlist_ids
      json.artist song.artist, :id, :name
      json.album song.album, :id, :name, :image_url
    end
  end
end

# json.albums do
#   albums.each do |album|
#     json.set! album.id do
#       json.extract! album, :id, :name, :description, :artist_id, :image_url
#     end
#   end
# end
#
# json.artists do
#   artists.each do |artist|
#     json.set! artist.id do
#       json.extract! artist, :id, :name, :description
#     end
#   end
# end
