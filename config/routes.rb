Rails.application.routes.draw do


  namespace :api, defaults: { format: :json } do

    resources :users, only: [:create, :show, :update, :destroy, :index] do
      get "search", on: :collection
      resources :friendships, only: [:create, :destroy]
    end

    resource :session, only: [:create, :destroy]

    resources :friendships, only: [:destroy, :update]

    resources :transactions, only: [:create, :show, :index, :destroy] do
      resources :comments, only: [:create, :destroy]
      resources :likes, only: [:create, :destroy]
    end



  end

  root "static_pages#root"

end
