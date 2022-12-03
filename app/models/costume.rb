class Costume < ApplicationRecord
    has_many :cart_costumes
    has_many :carts, through: :cart_costumes
    has_many :favorites
    has_many :customers, through: :favorites
end
