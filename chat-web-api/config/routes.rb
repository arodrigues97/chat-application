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

  get 'active_channels', :to => 'channels#active_channels'

  get '/channels/:id/statistics', :to => 'channels#statistics'
  get '/channels/:id/users', :to => 'channels#users'

  post '/channels/:id/join', :to => 'channels#join'

  get '/channels/:id/user_joined', :to => 'channels#user_joined'
 
  get '/giphy/suggestion', :to => 'giphy#suggestion'

end
