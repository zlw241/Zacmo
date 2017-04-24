
class Api::SessionsController < ApplicationController

  def create
    username = session_params[:username]
    password = session_params[:password]
    @user = User.find_by_credentials(username, password)
    if @user.nil?
      render(
        json: ["Invalid username/password combination"],
        status: 401
      )
    else
      log_in(@user)
      render "api/users/show"
    end
  end

  def destroy
    @user = current_user
    # log_out
    #
    # render "api/users/show"
    if @user
      log_out
      render "api/users/show"
    else
      render(
        json: ["Nobody signed in"],
        status: 404
      )
    end
  end


  private
  def session_params
    params.require(:user).permit(:username, :email, :phone_num, :password)
  end
end
