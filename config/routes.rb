Rails.application.routes.draw do


  namespace :api, defaults: { format: :json } do

    resources :users, only: [:create, :show, :update, :destroy, :index] do
      get "search", on: :collection
      resources :friendships, only: [:create, :destroy]
    end

    resource :session, only: [:create, :destroy]

    resources :friendships, only: [:destroy, :update]

    resources :transactions, only: [:create, :show, :index, :destroy]

    resources :comments, only: [:create, :destroy]

  end

  root "static_pages#root"

end
