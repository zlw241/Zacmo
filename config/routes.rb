Rails.application.routes.draw do
  # namespace :api do
  # get 'friends_controller/create'
  # end

  # namespace :api do
  # get 'friends_controller/destroy'
  # end

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update, :destroy, :index] do
      get "search", on: :collection
      resources :friendships, only: [:create, :destroy]
    end
    resource :session, only: [:create, :destroy]

  end

  root "static_pages#root"

end
