# artists = []

json.albums do
  @albums.each do |album|
    # artists << album.artist
    json.set! album.id do
      # json.partial! 'api/albums/album', album: album, songs: nil
      json.extract! album, :id, :name, :description, :artist_id, :image_url, :song_ids
      json.artist album.artist, :id, :name
    end
  end
end

# json.artists do
#   artists.each do |artist|
#     json.set! artist.id do
#       json.extract! artist, :id, :name, :description, :image_url
#     end
#   end
# end
