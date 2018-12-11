class Save < ApplicationRecord

  belongs_to :saveable, polymorphic: true
  belongs_to :saver,
    foreign_key: :saver_id,
    class_name: :User
end
