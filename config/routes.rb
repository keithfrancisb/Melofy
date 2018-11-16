Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_page#root'

  namespace :api, defaults: {format: :json} do
    resources :playlists, only: [:index,:show,:create,:update,:destroy] do
      resources :songs, only: [:index,:create,:destroy]
    end

    # resources :songs, only: [:show]

    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end

end
