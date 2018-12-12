json.extract! user, :id, :first_name, :last_name, :email, :playlist_ids
json.extract! user, :saved_song_ids, :saved_artist_ids, :saved_album_ids, :saved_playlist_ids

json.saves do

  user_saves = user.saves

  if(user_saves.length == 0)
    json.empty({})
  else
    user.saves.each do |save|
      json.set! save.id do
        json.extract! save, :id, :saveable_id, :saveable_type
      end
    end
  end
end
