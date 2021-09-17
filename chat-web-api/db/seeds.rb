# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([ name: 'Star Wars' ,  name: 'Lord of the Rings' ])
#   Character.create(name: 'Luke', movie: movies.first)


 User.create!(id: 1, name: "Adam Rodrigues")
 User.create!(id: 2, name: "Ankit Kanojia")

Channel.create!(id: 1, name: "Adam's Channel", user_id: 1)
Channel.create!(id: 2, name: "Ankit's Channel", user_id: 2)


ChannelJoined.create!(user_id: 1, channel_id: 1)
ChannelJoined.create!(user_id: 2, channel_id: 2)

Message.create!( message: "Hello, It's me Adam",  channel_id: 1, user_id: 1)

Message.create!(  message: "Hello, It's me Ankit", channel_id: 2,  user_id: 2)