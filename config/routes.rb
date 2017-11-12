Rails.application.routes.draw do
  get 'games/game'

  get 'games/score'

  # 017 Changed the line below from the default "get 'pages/game'" to "root 'pages#game'" so the 'game.html.erb' becomes the landing page.
  # 018 'rails s' @terminal / Lets make sure that what we've done so far is working.
    # 018a ERROR "couldn't find file 'jquery' with type 'application/javascript'"
    # 018a SOLUTION added "gem 'jquery-rails'" to the Gemfile, stopped the server, bundle installed, restart server. MOVE 2 'Gemfile'
  # 019 git init, git add ., git commit -m 'setup complete!', hub create, git push origin master, @terminal / folder is 2.2mb at this point. MOVE 2 'games_controller.rb'

  root 'games#game'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
