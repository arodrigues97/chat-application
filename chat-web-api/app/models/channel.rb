class Channel < ApplicationRecord
  belongs_to :user
  has_many :message

  def as_json(options={})
    {
      id: id,
      name: name,
      createdAt: created_at,
      owner: {
        id: user.id,
        name: user.name
      },
      messages: message
    }
end
end
