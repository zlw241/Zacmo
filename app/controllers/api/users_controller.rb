class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render :show
    else
      render json: @user.error.full_messages
    end
  end

  def show

  end

  def update
  end

  def destroy
  end
end
