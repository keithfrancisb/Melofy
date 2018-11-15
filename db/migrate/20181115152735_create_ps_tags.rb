class CreatePsTags < ActiveRecord::Migration[5.2]
  def change
    create_table :ps_tags do |t|
      t.integer :playlist_id, null: false
      t.integer :song_id, null: false
    end

    add_index :ps_tags, :playlist_id
    add_index :ps_tags, :song_id
  end
end
