class Comment < ActiveRecord::Base

  validates :user_id, :transaction_id, :body, presence: true


  belongs_to :user
  belongs_to :comment_transaction, class_name: "Transaction", foreign_key: :transaction_id

end
