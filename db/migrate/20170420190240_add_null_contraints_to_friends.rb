class AddNullContraintsToFriends < ActiveRecord::Migration
  def change

    change_column :friends, :user_id, :integer, null: false
    change_column :friends, :friend_id, :integer, null: false

    add_index :friends, [:user_id, :friend_id], unique: true
  end
end
