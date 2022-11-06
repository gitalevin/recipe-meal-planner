Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post "/users" => "users#create"
  post "/sessions" => "sessions#create"

  get "/ingredients" => "ingredients#index"
  post "/ingredients" => "ingredients#create"

  get "/pantry_items" => "pantry_items#index"
  post "/pantry_items" => "pantry_items#create"
end
