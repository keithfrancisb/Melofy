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

  has_many: :ps_tags
  has_many: :songs, through: :ps_tags
end
