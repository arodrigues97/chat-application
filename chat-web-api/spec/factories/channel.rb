

FactoryBot.define do
    
    factory :channel do
        name {Fake::Lorem.word}
        active true
        user_id 1
    end

    
end