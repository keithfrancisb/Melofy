class Api::SongsController < ApplicationController

  def show
    @song = Song.find(params[:id])

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
    @song = @playlist.songs.find(params[:id])
    # @song.destroy
    # .destroy removes song from the database. NO NO NO
    if @song
      @playlist.songs -= [@song]

      render 'api/playlists/show'
    else
      render json: ["Song is already not included in the playlist."], status: 422
    end

  end

end
