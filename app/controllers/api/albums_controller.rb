class Api::AlbumsController < ApplicationController

  def index
    if(params[:search_term])
      @albums = Album.where('name ILIKE ?', "%#{params[:search_term].downcase}%").includes(:songs,:artist)
    elsif (params[:album_ids])
      @albums = Album.where(id: params[:album_ids])
    else
      @albums = Album.all.includes(:songs,:artist)
    end
  end

  def show
    @album = Album.find(params[:id])
    @artist = @album.artist
    @songs = @album.songs
  end

end
