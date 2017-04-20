class Friend < ActiveRecord::Base

  validates :user_id, :friend_id, presence: true

  
  belongs_to :user,
    foreign_key: :user_id

  belongs_to :friend,
    foreign_key: :friend_id


end
