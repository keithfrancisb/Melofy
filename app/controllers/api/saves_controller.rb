class Api::SavesController < ApplicationController

  def create
    @new_save = current_user.saves.new
    @new_save.saveable_type = params[:saveable_type]
    @new_save.saveable_id = params[:saveable_id]

    if(@new_save.save)
      @user = current_user
      render 'api/users/show'
    end
  end

  def destroy
    @save = current_user.saves.find(params[:id])
    
    if(@save.destroy)
      @user = current_user
      render 'api/users/show'
    end
  end


end
