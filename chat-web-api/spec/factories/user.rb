

FactoryBot.define do
    
    factory :user do
        name {'Test User'}

        factory :user_random do
            sequence(:name) { |n| "User #{n}" }
        end
    end
end