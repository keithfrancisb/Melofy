
json.extract! playlist, :id, :name, :description, :user_id, :image_url


if songs
  json.songs do
    songs.each do |song|
      json.set! song.id do
        json.extract! song, :id, :name, :artist_id, :album_id
      end
    end
  end
end
