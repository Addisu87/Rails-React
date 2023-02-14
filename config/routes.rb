# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  # Defines the root path route ("/")
  root 'pages#home'

  get '*path', to: 'pages#home', via: :all
  
end
