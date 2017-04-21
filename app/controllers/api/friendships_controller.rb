class Api::FriendshipsController < ApplicationController

  def create

    puts "AHAHSHHAHAHAHAHAHAHh"
    @user = User.find(params[:user_id])
    # @friendship = Friendship.request(current_user, friend)
    Friendship.request(current_user, @user)
    render "api/users/show"
    # else
    #   render json: @user.errors.full_messages, status: 401
    # end
  end

  def update
    @user = User.find(params[:id])
    Friendship.accept(current_user, @user)
    render "api/users/show"
  end

  def destroy
    # @friendship = Friendship.find_by(user_id: current_user.id, friend_id: params[:id])
    # @friendship = current_user.friendships.where(friend_id: params[:id])
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
