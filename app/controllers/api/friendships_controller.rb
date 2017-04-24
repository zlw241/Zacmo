class Api::FriendshipsController < ApplicationController

  def create
    friend = User.find(params[:user_id])
    @user = current_user
    Friendship.request(@user, friend)
    render "api/users/show"
  end

  def update
    @user = User.find(params[:id])
    Friendship.accept(current_user, @user)
    render "api/users/show"
  end

  def destroy
    @user = User.find(params[:id])
    if current_user.friends.delete(@user) && @user.friends.delete(current_user)
      render "api/users/show"
    else
      render json: @user.errors.fullmessages, status: 422
    end
  end

  # def friends_params
  #   params.require(:friend).permit(:user_id, :friend_id)
  # end
end
