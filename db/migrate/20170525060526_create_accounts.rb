class CreateAccounts < ActiveRecord::Migration
  def change
    create_table :accounts do |t|
      t.string :user_id, null: false
      t.string :account_url, null: false
      t.timestamps null: false
    end

    add_index :accounts, :user_id, unique: true
  end
end
