class Api::PlaylistsController < ApplicationController

  def create
    @playlist = current_user.playlists.new(playlist_params)

    if @playlist.save
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def update
    @playlist = current_user.playlists.find(params[:id])

    if @playlist.update(playlist_params)
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def destroy
    @playlist = current_user.playlists.find(params[:id])
    @playlist.destroy
    # TODO: render current_user's playlist index
    render :show
  end

  private

  def playlist_params
    params.require(:playlist).permit(:name,:description)
  end
end
