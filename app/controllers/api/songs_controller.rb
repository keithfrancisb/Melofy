class Api::SongsController < ApplicationController

  def show
    @song = Song.find(params[:id])
    @artist_name = @song.artist.name
    album = @song.album
    @album_name = album.name
    @album_image = album.image_url
  end

  def index
    if(params[:search_term])
      @songs = Song.where('name ILIKE ?', "%#{params[:search_term].downcase}%").includes(:artist,:album,:playlists)
    elsif (params[:song_ids])
      @songs = Song.where(id: params[:song_ids]).includes(:artist,:album,:playlists)
    else
      @songs = Song.all.includes(:artist,:album,:playlists)
    end
  end

  def create

    @playlist = current_user.playlists.find(params[:playlist_id])
    @song = Song.find(params[:songId])

    if @song
      @playlist.song_ids += [params[:songId]]
      render json: ['Song successfully added to playlist!'], status: 200
    else
      render json: ['Song does not exist!'], status: 422
    end
  end

  def destroy
    @playlist = current_user.playlists.find(params[:playlist_id])
    # @song = @playlist.songs.find(params[:id])
    @ps_tag = PsTag.where('playlist_id = ? AND song_id = ?', params[:playlist_id], params[:id]).first
    @ps_tag.destroy

    render 'api/playlists/show'
    # else
    #   render json: ["Song is already not included in the playlist."], status: 422
    # end

  end

end
