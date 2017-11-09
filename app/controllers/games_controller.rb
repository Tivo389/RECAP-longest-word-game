class GamesController < ApplicationController

  # 020 This is a constant to create an array of vowel strings
  VOWELS = %w(A E I O U Y)

  def game
    # 021 An instance variable (@) that will create an array with 3 items by picking random samples from the VOWELS variable.
    @grid = Array.new(3) { VOWELS.sample }
    # 022 This will add 6 more items to @grid. The items that can be added are the alphabets minus the VOWELS.
    @grid += Array.new(6) { (('A'..'Z').to_a - VOWELS).sample }
    # 023 The array which now consists of a total of 9 items is shuffled.
    @grid.shuffle!
    # 024 change to 'game.html.erb'
  end

  def score
  end

end
