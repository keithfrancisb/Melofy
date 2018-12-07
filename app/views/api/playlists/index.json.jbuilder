@playlists.each do |playlist|
  json.set! playlist.id do
    # json.partial! 'api/playlists/playlist', playlist: playlist, songs: nil
    json.extract! playlist, :id, :name, :description, :user_id, :image_url, :song_ids
    json.user playlist.user, :id, :first_name, :last_name
  end
end
