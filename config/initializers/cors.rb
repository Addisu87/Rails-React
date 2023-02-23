Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'
    resource(
      '*',
      headers: ["Authorization"],
      expose: ['access-token', 'expiry', 'token-type', 'Authorization'],
      methods: [:get, :patch, :put, :delete, :post, :options, :show]
    )
  end
end