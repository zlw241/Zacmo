class Friendship < ActiveRecord::Base
  validates :user_id, :friend_id, presence: true
  validates :status, inclusion: { in: ["pending", "requested", "accepted"] }

  belongs_to :user,
    class_name: "User",
    foreign_key: :user_id

  belongs_to :friend,
    class_name: "User",
    foreign_key: :friend_id

  def self.existing_relation?(user, friend)
    Friendship.where(user_id: user.id, friend_id: friend.id).exists? || Friendship.where(user_id: friend.id, friend_id: user.id).exists?
  end

  # Methods pertaining to friendships with other users
  def self.request(user, friend)
    unless user == friend || Friendship.existing_relation?(user, friend)
      transaction do
        create!(user_id: user.id, friend_id: friend.id, status: 'pending')
        create!(user_id: friend.id, friend_id: user.id, status: 'requested')
      end
    else
      return "friendship already requested"
    end
  end

  def self.accept(user, friend)
    transaction do
      accept_side(user, friend)
      accept_side(friend, user)
    end
  end

  def self.accept_side(user, friend)
    request = find_by(user_id: user.id, friend_id: friend.id)
    request.status = 'accepted'
    request.save!
  end




end
