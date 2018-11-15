# == Schema Information
#
# Table name: songs
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  song_url   :string           not null
#  artist_id  :integer          not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord

  validates :name, :song_url, presence: true

  belongs_to :artist
  belongs_to :album

  has_many :ps_tags
  has_many :playlists, through: :ps_tags

end
