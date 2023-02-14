class UserController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: user, status: :ok
  end
end
