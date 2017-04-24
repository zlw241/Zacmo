class Api::TransactionsController < ApplicationController
  def create
    recipient = User.find_by(username: transaction_params['recipient_username'])

    recipient_id = recipient.id
    memo = transaction_params['memo']
    amount = transaction_params['amount']
    new_transaction = {'recipient_id': recipient_id, 'memo': memo, 'amount': amount}

    @transaction = current_user.transactions.new(new_transaction)

    if @transaction.save
      recipient.update(balance: recipient.balance+@transaction.amount)
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
    params.require(:transaction).permit(:recipient_username, :memo, :amount)
  end
end
