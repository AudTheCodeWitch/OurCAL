class User < ApplicationRecord
  has_many :blocks
  has_many :difficulties, through: :blocks
end
