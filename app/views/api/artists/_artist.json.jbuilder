# json.playlist do
#   json.extract! playlist, :id, :name, :description, :user_id
# end
#
# if songs
#   json.songs do
#     songs.each do |song|
#       json.set! song.id do
#         json.extract! song, :id, :name, :artist_id, :album_id
#       end
#     end
#   end
# end

json.artist do
  json.extract! artist, :id, :name, :description, :image_url
end

if albums
  json.albums do
    albums.each do |album|
      json.set! album.id do
        json.extract! album, :id, :name, :description, :artist_id, :image_url
      end
    end
  end

end
