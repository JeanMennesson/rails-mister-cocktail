class Ingredient < ApplicationRecord
  has_many :doses, dependent: :delete_all
  validates :name, presence: true, uniqueness: true
end
