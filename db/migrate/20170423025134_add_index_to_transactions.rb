class AddIndexToTransactions < ActiveRecord::Migration
  def change
    add_index :transactions, [:user_id, :recipient_id], unique: true
    
  end
end
