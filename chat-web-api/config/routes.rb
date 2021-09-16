Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :channels do
    resources :channel_joineds
    resources :messages
  end

  resources :users


end
