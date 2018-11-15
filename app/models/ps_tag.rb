# == Schema Information
#
# Table name: ps_tags
#
#  id          :bigint(8)        not null, primary key
#  playlist_id :integer          not null
#  song_id     :integer          not null
#

class PsTag < ApplicationRecord

  validates :song_id, uniqueness: { scope: :playlist_id }

  belongs_to :playlist
  belongs_to :song

end
