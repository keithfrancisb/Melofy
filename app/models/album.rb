# == Schema Information
#
# Table name: albums
#
#  id          :bigint(8)        not null, primary key
#  name        :string           not null
#  artist_id   :integer          not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Album < ApplicationRecord

  validates :name, presence: true

  belongs_to :artist
  has_many :songs

end
