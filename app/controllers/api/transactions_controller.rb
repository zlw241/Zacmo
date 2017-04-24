class Api::TransactionsController < ApplicationController
  def create
    @transaction = current_user.transactions.new(transaction_params)
    if @transaction.save
      render "/api/transactions/show"
    else
      render json: @transaction.errors.full_messages, status: 401
    end
  end

  def destroy
  end

  def index
    friends = current_user.friends.pluck(:id)
    @transactions = Transaction
      .where("transactions.user_id IN (:friend_ids) OR transactions.recipient_id IN (:friend_ids) OR transactions.user_id = :id OR transactions.recipient_id = :id", friend_ids: friends, id: current_user.id)
      .all
      .order("created_at DESC")
    render "/api/transactions/index"
  end

  def show
    @transaction = Transaction.find(params[:id])
    render "/api/transactions/show"
  end

  def transaction_params
    params.require(:transaction).permit(:recipient_id, :memo, :amount)
  end
end
