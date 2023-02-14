# frozen_string_literal: true

Rails.application.routes.draw do
  get '/user', to: 'user#index'

  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  # Defines the root path route ("/")
  root 'pages#home'

  get '*path', to: 'pages#home', via: :all

end
