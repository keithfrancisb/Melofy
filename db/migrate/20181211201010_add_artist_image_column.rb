class AddArtistImageColumn < ActiveRecord::Migration[5.2]
  def change

    add_column :artists, :cover_url, :string
  end
end
