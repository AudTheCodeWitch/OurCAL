class PixelSerializer
  include FastJsonapi::ObjectSerializer
  attributes :x, :y, :color, :color_variable
  belongs_to :block
end
