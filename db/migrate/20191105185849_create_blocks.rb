class CreateBlocks < ActiveRecord::Migration[6.0]
  def change
    create_table :blocks do |t|
      t.string :name
      t.references :user, null: false, foreign_key: true
      t.references :difficulty, null: false, foreign_key: true

      t.timestamps
    end
  end
end
