Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

root 'static_page#root'

namespace :api, defaults: {format: :json} do
  resources :playlists, only: [:create,:update,:destroy] do
    resources :songs, only: [:create,:destroy]
  end

  resources :users, only: [:create]
  resource :session, only: [:create, :destroy]
end

end
