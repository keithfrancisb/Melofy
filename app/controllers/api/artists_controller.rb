class Api::ArtistsController < ApplicationController

  def index
    if(params[:search_term])
      @artists = Artist.where('name ILIKE ?', "%#{params[:search_term].downcase}%").includes(:albums,:songs)
    elsif (params[:artist_ids])
      @artists = Artist.where(id: params[:artist_ids]).includes(:albums, :songs)
    else
      @artists = Artist.all.includes(:albums,:songs)
    end
  end

  def show
    @artist = Artist.find(params[:id])
    # @albums = @artist.albums
  end

end
