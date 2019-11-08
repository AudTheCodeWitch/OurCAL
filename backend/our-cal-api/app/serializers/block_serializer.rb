class BlockSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :user, :difficulty, :pixels
  belongs_to :user
  belongs_to :difficulty
  has_many :pixels
end
