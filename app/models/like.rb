class Like < ActiveRecord::Base

  validates :user_id, :transaction_id, presence: true

  belongs_to :transaction_item,
    class_name: "Transaction",
    foreign_key: :transaction_id
  belongs_to :user


end
