
class Api::SessionsController < ApplicationController

  def create
    username = session_params[:username]
    password = session_params[:password]
    @user = User.find_by_credentials(username, password)
    if @user.nil?
      render json: "Invalid credentials", status: 422
    else
      render "/api/users/#{@user.id}"
    end
  end

  def destroy
  end

  private
  def session_params
    params.require(:user).permit(:username, :email, :phone_num, :password)
end
