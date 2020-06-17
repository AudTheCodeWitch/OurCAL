class AddColorVariableToPixels < ActiveRecord::Migration[6.0]
  def change
    add_column :pixels, :color_variable, :string
  end
end
