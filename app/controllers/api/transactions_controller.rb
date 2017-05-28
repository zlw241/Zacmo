class Api::TransactionsController < ApplicationController
  def create
    recipient = User.find_by(username: transaction_params['recipient_username'])
    recipient_id = recipient.id
    memo = transaction_params['memo']
    amount = transaction_params['amount']
    new_transaction = {'recipient_id': recipient_id, 'memo': memo, 'amount': amount}
    @transaction = current_user.transactions.new(new_transaction)

    if @transaction.save
      # @transaction.includes(:likes, :comments)
      current_user.transfer_funds(recipient, amount.to_f)
      recipient.update(balance: recipient.balance + @transaction.amount)
      if current_user.balance <= @transaction.amount
        current_user.update(balance: 0)
      else
        current_user.update(balance: current_user.balance - @transaction.amount)
      end
      render "/api/transactions/show"
    else
      render json: @transaction.errors.full_messages, status: 401
    end
  end

  def destroy
  end

  def index
    # debugger
    # debugger
    friends = current_user.friends.pluck(:id)
    @transactions = Transaction
      .includes(:likes, :comments, :user)
      .where("transactions.user_id IN (:friend_ids) OR transactions.recipient_id IN (:friend_ids) OR transactions.user_id = :id OR transactions.recipient_id = :id", friend_ids: friends, id: current_user.id)
      .order("created_at DESC")
      .limit(5)
      # .all

    render "/api/transactions/index"
  end

  def offset
    sleep 1
    if params[:offset].present?
      friends = current_user.friends.pluck(:id)
      @transactions = Transaction
        .includes(:likes, :comments, :user)
        .where("transactions.user_id IN (:friend_ids) OR transactions.recipient_id IN (:friend_ids) OR transactions.user_id = :id OR transactions.recipient_id = :id", friend_ids: friends, id: current_user.id)
        .order("created_at DESC")
        .limit(5)
        .offset(params[:offset])
      render "/api/transactions/index"
    end
  end


  def show
    @transaction = Transaction.find(params[:id]).includes(:comments, :likes)
    render "/api/transactions/show"
  end

  private
  def transaction_params
    params.require(:transaction).permit(:recipient_username, :memo, :amount, :visibility, :offset)
  end
end
