class Api::LikesController < ApplicationController
  def create
    @transaction = Transaction.find(params[:transaction_id])
    @transaction.likes.new({user_id: current_user.id})
    if @transaction.save
      render "api/transactions/show"
    else
      render json: @transaction.errors.full_messages, status: 422
    end
  end

  def destroy
  end

end
