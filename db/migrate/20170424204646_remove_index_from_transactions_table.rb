class RemoveIndexFromTransactionsTable < ActiveRecord::Migration
  def change

    remove_index :transactions, name: "index_transactions_on_user_id_and_recipient_id"
    add_index :transactions, :user_id
    add_index :transactions, :recipient_id

  end
end
