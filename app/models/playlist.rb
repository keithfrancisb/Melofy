# == Schema Information
#
# Table name: playlists
#
#  id          :bigint(8)        not null, primary key
#  name        :string           not null
#  user_id     :integer          not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Playlist < ApplicationRecord

  validates :name, presence: true

  belongs_to :user
  has_one_attached :photo

  has_many :ps_tags
  has_many :songs, through: :ps_tags
  has_many :artists, through: :songs
  has_many :albums, through: :songs

  after_initialize :ensure_playlist_image

  def ensure_playlist_image
    unless self.image_url
      self.image_url = 'https://s3.amazonaws.com/playlist-dev/icons/noun_music+playlist_1058814.png'
    end
  end
end
