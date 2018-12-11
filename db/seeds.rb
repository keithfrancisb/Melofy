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
Save.destroy_all

# Users
user1 = User.create!(first_name:'Demo',last_name:'User',email:'demo_user@notMail.com',password:'123456')

# Artists
art1 = Artist.create!(name:'Caravan Palace')
art1.image_url = 'https://i.scdn.co/image/65df61829bfdb02f7e068de1b3c28799bdc5ace6'
art1.cover_url = 'https://i.scdn.co/image/c74a0b1d088c6b7140a28f7d728b36ca832874bf'
art1.save!

art2 = Artist.create!(name:'Panic! At The Disco')
art2.image_url = 'https://i.scdn.co/image/e71f9ba6573c95041ecd71f766788668f1ceb998'
art2.cover_url = 'https://i.scdn.co/image/a2d5caf95ea7319853924a019ff35bcf7dab123c'
art2.save!

art3 = Artist.create!(name:'Parov Stelar')
art3.image_url = 'https://i.scdn.co/image/f0e5cc6e912adbf51eb185067ea09009f8ed23d9'
art3.cover_url = 'https://i.scdn.co/image/c0a529ca40e783bbb1b6ec03d34c2da8995f0235'
art3.save!

art4 = Artist.create!(name:'RM')
art4.image_url = 'https://i.scdn.co/image/a59eaec7d3d9e6a41cbcc38c9c0a411551fb1d07'
art4.cover_url = 'https://dbkpop.com/wp-content/uploads/2018/08/bts_love_yourself_answer_RM_profile.jpg'
art4.save!

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

alb4 = Album.create!(name:'mono.', artist_id: art4.id) # RM
alb4.image_url = 'https://i.scdn.co/image/a59eaec7d3d9e6a41cbcc38c9c0a411551fb1d07'
alb4.save!

# Songs
# Pray for the Wicked
song1 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Pray+for+the+Wicked/Say+Amen+(Saturday+Night).mp3', name:'Say Amen (Saturday Night)', artist_id: art2.id, album_id: alb3.id)
song2 = Song.create!(song_url:"https://s3.amazonaws.com/playlist-dev/albums/Pray+for+the+Wicked/Panic!+At+The+Disco+Dancing's+Not+A+Crime+(Audio).mp3", name:'Dancing is Not a Crime', artist_id: art2.id, album_id: alb3.id)
song3 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Pray+for+the+Wicked/Panic!+At+The+Disco+Hey+Look+Ma%2C+I+Made+It+%5BOFFICIAL+VIDEO%5D.mp3', name:'Hey Look Ma, I Made It', artist_id: art2.id, album_id: alb3.id)
song4 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Pray+for+the+Wicked/Panic!+At+The+Disco+King+Of+The+Clouds+(Audio).mp3', name:'King of the Clouds', artist_id: art2.id, album_id: alb3.id)
song5 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Pray+for+the+Wicked/Panic!+At+The+Disco+Old+Fashioned+(Audio).mp3', name:'Old Fashioned', artist_id: art2.id, album_id: alb3.id)
song6 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Pray+for+the+Wicked/Panic!+At+The+Disco+One+Of+The+Drunks+(Audio).mp3', name:'One of the Drunks', artist_id: art2.id, album_id: alb3.id)
song7 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Pray+for+the+Wicked/Panic!+At+The+Disco+Roaring+20s+(Audio).mp3', name:'Roaring 20s', artist_id: art2.id, album_id: alb3.id)
song8 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Pray+for+the+Wicked/Panic!+At+The+Disco+The+Overpass+(Audio).mp3', name:'The Overpass', artist_id: art2.id, album_id: alb3.id)
song9 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Pray+for+the+Wicked/Panic!+At+The+Disco+Dying+In+LA+(Audio).mp3', name:'Dying in LA', artist_id: art2.id, album_id: alb3.id)


# <|°_°|>
song10 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Caravan+Palace/Caravan+Palace+-+Lone+Digger+(album+version).mp3', name:'Lone Digger', artist_id: art1.id, album_id: alb2.id)
song11 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Caravan+Palace/Aftermath.mp3', name:'Aftermath', artist_id: art1.id, album_id: alb2.id)
song12 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Caravan+Palace/Caravan+Palace+-+Comics.mp3', name:'Comics', artist_id: art1.id, album_id: alb2.id)
song13 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Caravan+Palace/Caravan+Palace+-+Human+Leather+Shoes+for+Crocodile+Dandies.mp3', name:'Human Leather Shoes for Crocodile Dandies', artist_id: art1.id, album_id: alb2.id)
song14 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Caravan+Palace/Caravan+Palace+-+Mighty+(feat.+JFTH).mp3', name:'Mighty', artist_id: art1.id, album_id: alb2.id)
song15 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Caravan+Palace/Caravan+Palace+-+Russian.mp3', name:'Russian', artist_id: art1.id, album_id: alb2.id)
song16 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Caravan+Palace/Caravan+Palace+-+Wonda.mp3', name:'Wonda', artist_id: art1.id, album_id: alb2.id)
song17 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Caravan+Palace/Lay+Down.mp3', name:'Lay Down', artist_id: art1.id, album_id: alb2.id)
song18 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Caravan+Palace/Midnight.mp3', name:'Midnight', artist_id: art1.id, album_id: alb2.id)
song19 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Caravan+Palace/Tattoos.mp3', name:'Tattoos', artist_id: art1.id, album_id: alb2.id)


# Coco
song20 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Parov+Stelar/Parov+Stelar+-+The+Mojo+Radio+Gang+(Official+Audio).mp3', name:'The Mojo Radio Gang', artist_id: art3.id, album_id: alb1.id)
song21 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Parov+Stelar/Parov+Stelar+-+Catgroove+(Official+Audio).mp3', name:'Catgroove', artist_id: art3.id, album_id: alb1.id)
song22 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Parov+Stelar/Parov+Stelar+-+Fleur+De+Lille+(Official+Audio).mp3', name:'Fleur De Lille', artist_id: art3.id, album_id: alb1.id)
song23 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Parov+Stelar/Parov+Stelar+-+Hotel+Axos+(Official+Audio).mp3', name:'Hotel Axos', artist_id: art3.id, album_id: alb1.id)
song24 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Parov+Stelar/Parov+Stelar+-+Libella+Swing+(Official+Audio).mp3', name:'Libella Swing', artist_id: art3.id, album_id: alb1.id)
song25 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Parov+Stelar/Parov+Stelar+-+Matilda+(Official+Audio).mp3', name:'Matilda', artist_id: art3.id, album_id: alb1.id)
song26 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Parov+Stelar/Parov+Stelar+-+Monster+(Official+Audio).mp3', name:'Monster', artist_id: art3.id, album_id: alb1.id)
song27 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Parov+Stelar/Parov+Stelar+-+Nosferatu+(Official+Audio).mp3', name:'Nosferatu', artist_id: art3.id, album_id: alb1.id)
song28 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/Parov+Stelar/Parov+Stelar+-+Ragtime+Cat+feat.+Lilja+Bloom+(Official+Audio).mp3', name:'Ragtime Cat', artist_id: art3.id, album_id: alb1.id)

# mono.
song28 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/RM/01.+tokyo.mp3', name:'tokyo', artist_id: art4.id, album_id: alb4.id)
song28 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/RM/02.+seoul+(prod.+HONNE).mp3', name:'seoul (prod. HONNE)', artist_id: art4.id, album_id: alb4.id)
song28 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/RM/03.+moonchild.mp3', name:'moonchild', artist_id: art4.id, album_id: alb4.id)
song28 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/RM/04.+badbye+(with+eAeon).mp3', name:'badbye', artist_id: art4.id, album_id: alb4.id)
song28 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/RM/05.+uhgood.mp3', name:'uhgood', artist_id: art4.id, album_id: alb4.id)
song28 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/RM/06.+everythingoes+(with+NELL).mp3', name:'everythingoes', artist_id: art4.id, album_id: alb4.id)
song28 = Song.create!(song_url:'https://s3.amazonaws.com/playlist-dev/albums/RM/07.+forever+rain.mp3', name:'forever rain', artist_id: art4.id, album_id: alb4.id)



## Agust D

agustD = Artist.create!(name:'Agust D', description:'No habla Korean')
agustD.image_url = 'https://i.scdn.co/image/4e1f70bbc6ab7cb3c8d33aee60c441e1a8bfc0a4'
agustD.cover_url = 'https://i.imgur.com/LpzdOWp.jpg'
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

# Saves
save1 = Save.create!(saver_id: user1.id, saveable_id: song18.id, saveable_type: :Song)
save2 = Save.create!(saver_id: user1.id, saveable_id: song1.id, saveable_type: :Song)
save3 = Save.create!(saver_id: user1.id, saveable_id: song10.id, saveable_type: :Song)
save4 = Save.create!(saver_id: user1.id, saveable_id: song3.id, saveable_type: :Song)
save5 = Save.create!(saver_id: user1.id, saveable_id: song21.id, saveable_type: :Song)
save6 = Save.create!(saver_id: user1.id, saveable_id: song24.id, saveable_type: :Song)

save7 = Save.create!(saver_id: user1.id, saveable_id: art2.id, saveable_type: :Artist)
save8 = Save.create!(saver_id: user1.id, saveable_id: art1.id, saveable_type: :Artist)
save9 = Save.create!(saver_id: user1.id, saveable_id: art3.id, saveable_type: :Artist)

save10 = Save.create!(saver_id: user1.id, saveable_id: alb1.id, saveable_type: :Album)
save11 = Save.create!(saver_id: user1.id, saveable_id: alb2.id, saveable_type: :Album)
save12 = Save.create!(saver_id: user1.id, saveable_id: alb3.id, saveable_type: :Album)





















#
