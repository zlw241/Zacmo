class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    # sleep 1
    @user = User.find(params[:id])
    render :show
  end

  def index
    @users = User.all
  end

  def update
    @user = current_user
    if @user.update(user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def search
    if params[:query].present?
      @users = User.where("username ~ ?", params[:query])
      render "api/users/search"
    else
      @users = User.none
      render {}
    end
  end

  # def friend
  #   @user = User.find(params[:id])
  #   Friendship.request(current_user, @user)
  #   render "api/users/show"
  # end

  def destroy
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :phone_num, :first_name, :last_name, :password)
  end
end
