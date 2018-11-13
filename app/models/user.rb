class User < ApplicationRecord

  validates :first_name, :last_name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password
  after_initialize :ensure_session_token

  # FRIPE

  def self.find_by_credentials(email,password)
    user = User.find_by_email(:email)
    user && user.is_password?(password) ? user : nil
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  def is_password?(ps)
    BCrypt::Password.new(self.password_digest).is_password?(ps)
  end

  def password=(ps)
    @password = ps
    self.password_digest = BCrypt::Password.create(ps)
  end

  private

  def generate_session_token
    SecureRandom::urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

end
