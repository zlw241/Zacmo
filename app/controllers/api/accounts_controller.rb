

class Api::AccountsController < ApplicationController

  def new
    @funding_token = current_user.account.generate_funding_token
    if @funding_token
      render "api/account/new"
    else
      render json: @funding_token.errors.full_messages, status: 422
    end
  end

  def show
    @user = current_user
  end

  def create
    @user = current_user
  end

  def edit
  end

  def update
  end

  def destroy
  end

end
