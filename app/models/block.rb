class Block < ApplicationRecord
  belongs_to :user
  belongs_to :difficulty
  has_many :pixels, :dependent => :destroy
  accepts_nested_attributes_for :pixels

end
