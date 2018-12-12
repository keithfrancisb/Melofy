json.extract! user, :id, :first_name, :last_name, :email
json.extract! user, :saved_song_ids, :saved_artist_ids, :saved_album_ids, :saved_playlist_ids
json.saves do
  user.saves.each do |save|
    json.set! save.id do
      json.extract! save, :id, :saveable_id, :saveable_type
    end
  end
end
