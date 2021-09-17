

FactoryBot.define do
    
    factory :user do
        name {Fake::Lorem.word}
    end
end