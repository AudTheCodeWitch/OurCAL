class PixelSerializer
  include FastJsonapi::ObjectSerializer
  attributes :x, :y, :color
  belongs_to :block
end
