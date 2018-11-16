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

json.album do
  json.extract! album, :id, :name, :description, :artist_id
end

if songs
  json.songs do
    songs.each do |song|
      json.set! song.id do
        json.extract! song, :id, :name, :artist_id, :album_id
      end
    end
  end
end
