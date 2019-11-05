class Block < ApplicationRecord
  belongs_to :user
  belongs_to :difficulty

  has_many :pixels
end
