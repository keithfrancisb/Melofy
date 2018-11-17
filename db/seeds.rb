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
art2 = Artist.create!(name:'Panic! At The Disco')
art3 = Artist.create!(name:'Parov Stelar')

# Albums
alb1 = Album.create!(name:'Coco, Pt. 2', artist_id: art3.id) # Parov Stelar
alb2 = Album.create!(name:'<|°_°|>', artist_id: art1.id) # Caravan Palace
alb3 = Album.create!(name:'Pray for the Wicked', artist_id: art2.id) # Panic! At The Disco

# Songs
song1 = Song.create!(song_url:'pending...', name:'Say Amen (Saturday Night)', artist_id: art2.id, album_id: alb3.id)
song2 = Song.create!(song_url:'pending...', name:'Lone Digger', artist_id: art1.id, album_id: alb2.id)
song3 = Song.create!(song_url:'pending...', name:'The Mojo Radio Gang', artist_id: art3.id, album_id: alb1.id)

# Playlists
pl1 = Playlist.create!(name:'Fo Shizzle maah Drizzle \o/ ', user_id:user1.id)
pl1.song_ids = [song1.id, song2.id, song3.id]
