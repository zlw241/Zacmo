class Transaction < ActiveRecord::Base
  validates :user_id, :recipient_id, :amount, :memo, presence: true
  validates :visibility, inclusion: { in: ["public", "private", "friends"] }

  belongs_to :user
  belongs_to :recipient, class_name: "User", foreign_key: :recipient_id

  has_many :likes
  has_many :likers, through: :likes, source: :user

  has_many :comments


end
