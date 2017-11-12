require 'open-uri'

class GamesController < ApplicationController

  # 020 This is a constant to create an array of vowel strings
  VOWELS = %w(A E I O U Y)

  def game
    # 044 A variable to store when the game starts. MOVE 2 'game.html.erb'
    @time_start = Time.now

    # 021 An instance variable (@) that will create an array with 3 items by picking random samples from the VOWELS variable.
    @grid = Array.new(3) { VOWELS.sample }
    # 022 This will add 6 more items to @grid. The items that can be added are the alphabets minus the VOWELS.
    @grid += Array.new(6) { (('A'..'Z').to_a - VOWELS).sample }
    # 023 The array which now consists of a total of 9 items is shuffled.
    @grid.shuffle!
    # 024 change to 'game.html.erb'
  end

  def score
    # 046 SOLUTION / Its because '@time_start' hasn't been defined within this method.
    @time_start = Time.parse(game_params[:time_start])
    # 047 I've put the time end here, but if it had to be VERY precise it should have been when the submit btn was clicked. MOVE 2 'score.html.erb'
    @time_end = Time.now
    # 032 In this case, we're not using a model so all the inputs will be stored in '@user_answer' as a hash; ITTWIDoing.
    @user_word = game_params[:user_answer]
    @user_letters = game_params[:user_answer].upcase.split('')
    # @user_answer = params.require(:game_data).permit(:user_answer, :grid_letters)
    # 033 To check what and how the data was being passed I did the following. (reference only due to later changes)
      # 033a - added 'yield' to see what was being passed.
        # @user_answer
        # => <ActionController::Parameters {"user_answer"=>"alpha"} permitted: false>
        # @user_answer['user_answer']
        # => "alpha"
      # 033b - added another user_answer (called fungus) in 'game.html.erb' to see what was being passed and how to access it.
        # @user_answer
        # => <ActionController::Parameters {"user_answer"=>"foo", "fungus"=>"bar"} permitted: false>
        # @user_answer['user_answer']
        # => "foo"
        # @user_answer['fungus']
        # => "bar"
    # 034 Since we don't want the user to be able to add grid letters we've used strong params. MOVE 2 'score.html.erb'
    @grid_letters = game_params[:grid_letters].split(' ')
    # 037 A function that returns a boolean to determine if @user_letters are in the @grid_letters. 38 is BELOW.
    @included = included?(@user_letters, @grid_letters)
    # 039 A function that returns a boolean to determing if the word is in the le-wagon dictionary. 40 is BELOW.
    @valid_word = valid_word?(@user_word)
    # 049 A function that calculates the result using the above variables. 050 is BELOW.
    @result = result(@user_word, @included, @valid_word, @time_start, @time_end)
  end

  private

  def game_params
    # 050 SOLUTION / Loads now at 1532-3323ms) Added :user_answer and :time_start into the permit list.
    params.require(:game_data).permit(:grid_letters, :user_answer, :time_start)
  end

  # 038 The 3 commented out lines below are for test purposes on rails console. As long as grid_letters has the > than or = amount of alphabets as user_letters, the function should return true. I'll need to check if its a valid word next! 39 is ABOVE.
  # user_letters = ["t", "e", "s", "t"]
  # grid_letters = ["t", "a", "b", "e", "h", "s", "y", "t"]
  def included?(user_letters, grid_letters)
    user_letters.all? { |letter| user_letters.count(letter) <= grid_letters.count(letter) }
  end
  # included?(user_letters, grid_letters)

  # 040 A function that sends the user word to a dictionary to check if its a valid word. MOVE 2 'score.html.erb'
  def valid_word?(user_word)
    response = open("https://wagon-dictionary.herokuapp.com/#{@user_word}")
    json = JSON.parse(response.read)
    json['found']
  end

  # 050 ERROR / After submit, the loading takes 43835ms (43.8 seconds). Still loaded though...
  # 050 MESSAGE / Unpermitted parameters: :user_answer, :time_start. SOLUTION IS ABOVE.
  # 051 A function that returns the result of the game.
  def result(user_word, included, valid_word, time_start, time_end)
    if included == false # if word doesn't use letters in grid.
      return "It looks like you haven't used the letters provided."
    elsif valid_word == false # if the letters are included but the word is invalid.
      return "Sorry, but I can't find the word you provided in the dictionary."
    elsif (included == true) && (valid_word == true) # if its a valid word then return the score based on the WordLength/Time
      score = ((user_word.length / (time_end - time_start)) * 100).round(0)
      return "Your score is #{score}"
    end
  end
  # 052 Lets see if it works. MOVE 2 'score.html.erb'

end
