

FactoryBot.define do
    factory :channel do
        name {'Test Channel'}
        factory :channel_random do
            sequence(:name) { |n| "Channel #{n}" }
        end
    end
end