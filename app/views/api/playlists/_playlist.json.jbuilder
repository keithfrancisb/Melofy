json.playlist do
  json.extract! playlist, :id, :name, :description, :user_id, :image_url, :song_ids
  json.user playlist.user, :id, :first_name, :last_name
end

# json.artists do
#   playlist.artists.each do |artist|
#     json.set! artist.id do
#       json.extract! artist, :id, :name, :description
#     end
#   end
# end
#
# json.albums do
#   playlist.albums.each do |album|
#     json.set! album.id do
#       json.extract! album, :id, :name, :artist_id
#     end
#   end
# end
#
# if songs
#   json.songs do
#     songs.each do |song|
#       json.set! song.id do
#         json.extract! song, :id, :name, :artist_id, :album_id, :song_url
#       end
#     end
#   end
# end
