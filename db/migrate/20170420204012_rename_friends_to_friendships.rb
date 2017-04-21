class RenameFriendsToFriendships < ActiveRecord::Migration
  def change
    rename_table :friends, :friendships
  end
end
