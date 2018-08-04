class Idea < ApplicationRecord
  has_one_attached :image

  belongs_to :user, optional: true
  has_many :idea_tags
  has_many :tags, through: :idea_tags
  has_many :votes
  has_many :comments

end