class AlbumsController < ApplicationController

  def index
    @albums = Album.all.include(:songs)
  end

  def show
    @album = Album.find(params[:id])
  end
  
end
