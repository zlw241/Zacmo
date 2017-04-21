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

  def destroy
  end

  # def friends_params
  #   params.require(:friend).permit(:user_id, :friend_id)
  # end
end
