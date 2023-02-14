Rails.application.routes.draw do
  # Defines the root path route ("/")
  root 'pages#home'
  
  get '*path', to: 'pages#home', via: :all
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
end
