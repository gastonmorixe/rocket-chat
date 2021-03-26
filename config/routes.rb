Rails.application.routes.draw do

  post "/graphql", to: "graphql#execute"

  get "/channel/(*rest)", to: 'pages#home'

  root to: 'pages#home'

end
