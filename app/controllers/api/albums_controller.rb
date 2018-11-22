class Api::AlbumsController < ApplicationController

  def index
    @albums = Album.all.includes(:songs,:artist)
  end

  def show
    @album = Album.find(params[:id])
    @artist = @album.artist
    @songs = @album.songs
  end

end
