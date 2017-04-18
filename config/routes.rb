Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update, :destroy]
  end

  root "static_pages#root"

end
