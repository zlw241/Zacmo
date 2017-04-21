class Api::FriendsControllerController < ApplicationController
  def create
    user = User.find(params[:user_id])
    friend = User.find(params[:friend_id])
    @friendship = Friendship.request(user, friend)
    if @friendship.save
      render "api/users/show"
    else
      render json: @friend.errors.full_messages, 401
    end
  end

  def destroy
  end

  def friends_params
    params.require(:friend).permit(:user_id, :friend_id)
  end
end
