class Api::AlbumsController < ApplicationController

  def index
    @albums = Album.all.includes(:songs)
  end

  def show
    @album = Album.find(params[:id])
    @songs = @album.songs
  end

end
