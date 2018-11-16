class Api::ArtistsController < ApplicationController

  def index
    @artists = Artist.all.includes(:albums)
  end

  def show
    @artist = Artist.find(params[:id])
    @albums = @artist.albums
  end

end
