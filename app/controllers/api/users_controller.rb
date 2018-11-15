class Api::UsersController < ApplicationController

  def create

    @user = User.new(user_params)

    if check_for_valid_email && @user.save
      login(@user)
      render 'api/users/show'
    elsif @invalid_email
      render json: ['Not a valid email.'], status: 422
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name,:last_name,:email,:password)
  end

  def check_for_valid_email
    unless @user.email.include?('@') && @user.email.include?('.com')
      @invalid_email = true
    else
      true
    end
  end
end
