class Api::SongsController < ApplicationController

  def create
    @playlist = currentUser.playlists.find(params[:playlist_id])
    @song = Song.find(params[:id])

    @playlist.songs += [song]
  end

  def destroy
    @playlist = currentUser.playlists.find(params[:playlist_id])
    @song = @playlist.songs.find(params[:id])
    # @song.destroy
    # .destroy removes song from the database. NO NO NO
    if @song
      @playlist.songs -= [song]

      render 'api/playlists/show'
    else
      render json: ["Song is already not included in the playlist."], status: 422
    end

  end

end
