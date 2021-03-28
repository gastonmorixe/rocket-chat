Rails.application.routes.draw do

  post "/graphql", to: "graphql#execute"
  get "/c/(*rest)", to: 'pages#home'
  root to: 'pages#home'
  
end
