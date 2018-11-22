# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Artist.destroy_all
Album.destroy_all
Song.destroy_all
Playlist.destroy_all
PsTag.destroy_all

# Users
user1 = User.create!(first_name:'Demo',last_name:'User',email:'demo_user@notMail.com',password:'123456')

# Artists
art1 = Artist.create!(name:'Caravan Palace')
art1.image_url = 'https://i.scdn.co/image/65df61829bfdb02f7e068de1b3c28799bdc5ace6'
art1.save!

art2 = Artist.create!(name:'Panic! At The Disco')
art2.image_url = 'https://i.scdn.co/image/e71f9ba6573c95041ecd71f766788668f1ceb998'
art2.save!

art3 = Artist.create!(name:'Parov Stelar')
art3.image_url = 'https://i.scdn.co/image/f0e5cc6e912adbf51eb185067ea09009f8ed23d9'
art3.save!

# Albums
alb1 = Album.create!(name:'Coco, Pt. 2', artist_id: art3.id) # Parov Stelar
alb1.image_url = 'https://i.scdn.co/image/798660dabdd45dcf7489f89898c2557f5a793748'
alb1.save!

alb2 = Album.create!(name:'<|°_°|>', artist_id: art1.id) # Caravan Palace
alb2.image_url = 'https://i.scdn.co/image/c9b9052483cf7cf196a2c13889b6b0dc8451a125'
alb2.save!

alb3 = Album.create!(name:'Pray for the Wicked', artist_id: art2.id) # Panic! At The Disco
alb3.image_url = 'https://i.scdn.co/image/c9c0ba55b658fcd567e2e1d71705fb24f617a2f6'
alb3.save!

# Songs
song1 = Song.create!(song_url:'pending...', name:'Say Amen (Saturday Night)', artist_id: art2.id, album_id: alb3.id)
song2 = Song.create!(song_url:'pending...', name:'Lone Digger', artist_id: art1.id, album_id: alb2.id)
song3 = Song.create!(song_url:'pending...', name:'The Mojo Radio Gang', artist_id: art3.id, album_id: alb1.id)




## Agust D

agustD = Artist.create!(name:'Agust D', description:'No habla Korean')
agustD.image_url = 'https://i.scdn.co/image/4e1f70bbc6ab7cb3c8d33aee60c441e1a8bfc0a4'
agustD.save!

agustDAlbum = Album.create!(name:'Agust D', artist_id: agustD.id, description:'Album of Korean songs')
agustDAlbum.image_url = 'https://s3.amazonaws.com/playlist-dev/albums/Agust+D+by+Agust+D/Agust+D+COVER.JPG'
agustDAlbum.save!

a_song1 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Agust+D+by+Agust+D/03.+give+it+to+me.mp3', name:'Give It to Me', artist_id:agustD.id, album_id: agustDAlbum.id)
a_song2 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Agust+D+by+Agust+D/04.+skit.mp3', name:'Skit', artist_id:agustD.id, album_id: agustDAlbum.id)
a_song3 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Agust+D+by+Agust+D/05.+%C6%92%C2%B0%E2%88%8F%C3%86%C2%AAA%CC%81%C2%BF%C5%93%C2%AAA%CC%81%E2%88%86%C2%BB+(724148).mp3', name:'724148', artist_id:agustD.id, album_id: agustDAlbum.id)
a_song4 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Agust+D+by+Agust+D/06.+140503+%C2%AA%C4%B1%E2%88%AB%C3%86%C3%B8%C2%B0+(140503+at+dawn).mp3', name:'140503 at Dawn', artist_id:agustD.id, album_id: agustDAlbum.id)
a_song5 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Agust+D+by+Agust+D/07.+%E2%88%8F%E2%88%82%C2%A1%CB%86%E2%88%8F%E2%88%91+(The+Last).mp3', name:'The Last', artist_id:agustD.id, album_id: agustDAlbum.id)
a_song6 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Agust+D+by+Agust+D/08.+Tony+Montana+(Feat.+Yankie).mp3', name:'Tony Montana', artist_id:agustD.id, album_id: agustDAlbum.id)
a_song7 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Agust+D+by+Agust+D/09.+Interlude+%3B+Dream%2C+Reality.mp3', name:'Interlude_dream, Reality', artist_id:agustD.id, album_id: agustDAlbum.id)
a_song8 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Agust+D+by+Agust+D/10.+so+far+away+(Feat.+%C2%BA%CB%86%E2%88%82%C4%B1+(SURAN)).mp3', name:'So Far Away', artist_id:agustD.id, album_id: agustDAlbum.id)

# Playlists
pl1 = Playlist.create!(name:'\o/ |o| /o\ |o| \o/', user_id:user1.id)
pl1.song_ids = [song1.id, song2.id, song3.id]

pl2 = Playlist.create!(name:'KC', user_id:user1.id)
pl2.songs = [a_song1,a_song2,a_song3,a_song4,a_song5,a_song6,a_song7,a_song8]
pl2.image_url = 'https://s3.amazonaws.com/playlist-dev/albums/Agust+D+by+Agust+D/Agust+D+COVER.JPG'
pl2.save!























#
