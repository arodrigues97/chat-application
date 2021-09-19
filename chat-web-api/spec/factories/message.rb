FactoryBot.define do
    factory :message do
        message {'Test Message'}
        factory :message_random do
            sequence(:message) { |n| "Message #{n}" }
        end
    end
end