class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    @user.avatar_from_url(@user.username)
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
      @users = User.where("lower(username) ~ :query OR lower(first_name) ~ :query", query: params[:query].downcase)
      render "api/users/search"
    else
      @users = User.none
      render {}
    end
  end

  def transactions
    user = User.find(params[:id])
    @transactions = Transaction
      .includes(:likes, :comments, :user)
      .where("transactions.user_id = :user_id OR transactions.recipient_id = :user_id", user_id: user.id)
      .all
    render "api/transactions/index"
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
    params.require(:user).permit(:username, :email, :phone_num, :first_name, :last_name, :password, :image)
  end
end
