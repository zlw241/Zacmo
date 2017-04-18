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
    @user = User.find(params[:id])
    render :show
  end

  def update
  end

  def destroy
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :phone_num, :first_name, :last_name)
  end
end
