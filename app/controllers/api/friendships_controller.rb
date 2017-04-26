class Api::FriendshipsController < ApplicationController

  def create
    friend = User.find(params[:user_id])
    @user = current_user
    Friendship.request(@user, friend)
    render "api/users/show"
  end

  def update
    friend = User.find(params[:id])
    @user = current_user
    Friendship.accept(@user, friend)
    render "api/users/show"
  end

  def destroy
    friend = User.find(params[:id])
    @user = current_user
    if @user.friends.delete(friend) && friend.friends.delete(@user)
      render "api/users/show"
    else
      render json: @user.errors.fullmessages, status: 422
    end
  end

  # def friends_params
  #   params.require(:friend).permit(:user_id, :friend_id)
  # end
end
