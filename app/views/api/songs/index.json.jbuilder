json.songs do
  @songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :name, :artist_id, :album_id, :song_url
    end
  end
end

json.albums do
  @albums.each do |album|
    json.set! album.id do
      # json.partial! 'api/albums/album', album: album, songs: nil
      json.extract! album, :id, :name, :description, :artist_id, :image_url
    end
  end
end

json.artists do
  @artists.each do |artist|
    json.set! artist.id do
      json.extract! artist, :id, :name, :description
    end
  end
end
