class DifficultySerializer
  include FastJsonapi::ObjectSerializer
  attributes :rating
  has_many :blocks
end
