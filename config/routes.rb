Rails.application.routes.draw do
  # 017 Changed the line below from the default "get 'pages/home'" to "root 'pages#home'" so the 'home.html.erb' becomes the landing page.
  # 018 'rails s' @terminal / Lets make sure that what we've done so far is working. (07:24)
    # 018a ERROR "couldn't find file 'jquery' with type 'application/javascript'"
    # 018a SOLUTION added "gem 'jquery-rails'" to the Gemfile, stopped the server, bundle installed, restart server. MOVE 2 'Gemfile'
  # 019 git init, git add ., git commit -m 'setup complete!' @terminal /


  root 'pages#home'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
