Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
 
  post '/users/search', :to => 'users#search'

  post '/channels/search', :to => 'channels#search_by_name'
  get '/channels/active/', :to => 'channels#active_channels'
  
  resources :channels do 
    resources :messages
  end
  
  resources :messages

  get '/channels/:id/statistics', :to => 'channels#statistics'
  get '/channels/:id/users', :to => 'channels#users'

  post '/channels/:id/join', :to => 'channels#join'

  get '/channels/:id/user_joined/:user_id', :to => 'channels#user_joined'
 
  get '/giphy/suggestion', :to => 'giphy#suggestion'

end
