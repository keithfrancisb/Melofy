class CreateSaves < ActiveRecord::Migration[5.2]
  def change
    create_table :saves do |t|
      t.integer :saver_id
      t.references :saveable, polymorphic: true, index: true
      t.timestamps
    end
  end
end
