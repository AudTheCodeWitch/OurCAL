class CreatePixels < ActiveRecord::Migration[6.0]
  def change
    create_table :pixels do |t|
      t.integer :x
      t.integer :y
      t.string :color
      t.references :block, null: false, foreign_key: true

      t.timestamps
    end
  end
end
