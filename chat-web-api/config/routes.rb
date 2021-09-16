Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
 
  resources :users do
      resources :messages
  end
  resources :channels do 
    resources :messages
  end
  resources :channels_joineds
  resources :messages


end
