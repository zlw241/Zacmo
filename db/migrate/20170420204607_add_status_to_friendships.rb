class AddStatusToFriendships < ActiveRecord::Migration
  def change
    add_column :friendships, :status, :string
  end
end
