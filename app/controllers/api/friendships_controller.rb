class Api::FriendsControllerController < ApplicationController
  def create
    @friend = Friend.new(friend_params)
    if @friend.save
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
