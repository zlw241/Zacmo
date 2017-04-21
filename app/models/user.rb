class User < ActiveRecord::Base
  attr_reader :password

  validates :username, :email, :first_name, :last_name, :phone_num, :session_token, presence: true
  validates :username, :email, :phone_num, uniqueness: true
  validates :password_digest, presence: { message: "Password can't be blank"}
  validates :password, length: { minimum: 8}, allow_nil: true

  after_initialize :ensure_session_token

  has_many :friendships

  has_many :friends, -> { where "status = 'accepted'"},
    through: :friendships,
    source: :friend

  has_many :friend_requests, -> { where "status = 'requested'"},
    through: :friendships,
    source: :friend

  has_many :pending_friends, -> { where "status = 'pending'"},
    through: :friendships,
    source: :friend

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    return BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && user.valid_password?(password)
    nil
  end

  def accept_friend_request(friend)
    friendship = friendships.where(status: 'requested', friend_id: friend.id)
  end

  def user_friend_ids
    @friend_ids ||= friends.pluck(:friend_id)
  end


  def friends_with?(user)
    user_friend_ids.include?(user.id)
  end

  private
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
