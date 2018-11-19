class AddUrls < ActiveRecord::Migration[5.2]
  def change
    add_column :artists, :image_url, :string
    add_column :albums, :image_url, :string
    add_column :playlists, :image_url, :string
    add_column :users, :image_url, :string
  end
end
