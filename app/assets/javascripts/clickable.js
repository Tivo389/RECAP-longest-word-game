$(document).ready(function() {
  // 056 Put the line below to ensure the file was being compiled correctly :)
  // console.log('DOM READY!!');

  playWordGame();

  function playWordGame() {
    var selectedLetters = [];
    // 066 New variable. 067 is BELOW.
    var timeStart = new Date();
    //=====================================================
    $('div.grid__container').children().each(function(gridIndex) {
      $(this).mousedown(function() {
        var gridLetterTag = $(this);
        var targetHTML = document.querySelector('div.letters__container');
        var selectedLetter = this.innerHTML;
        var letterNotSelected = !(gridLetterTag.hasClass('selected')) === true;
        //----------------------------------------------------
        switch (event.which) {
          case 1: // Left
            // 057 When left mousedown letter (not click; it req user to click-off) do the following...
            if (letterNotSelected) {
              addLetter(gridIndex, gridLetterTag, selectedLetter);
              return selectedLetters;
            } else {
              removeLetter(gridIndex, gridLetterTag, selectedLetter);
              return selectedLetters;
            }
          case 2: // Middle
            break;
          case 3: // Right
            break;
        }
        //-----------------------------------------------------
        function addLetter(gridIndex, gridLetterTag, selectedLetter){
          // 061 The html of selected letter is duplicated. Above 058 to ensure not grey-out is copied.
          targetHTML.insertAdjacentHTML('beforeend', gridLetterTag[0].outerHTML);
          // 057a Add a class to grey it out. MOVE 2 '_game.scss'
          gridLetterTag.addClass('selected');
          // 058  Then add to array as an object with gridIndex (to accomodate for same alphabets). MOVE 2 'game.html.erb'
          selectedLetters.push(new makeGridLetterObj(gridIndex, selectedLetter));
          return selectedLetters;
          function makeGridLetterObj(gridIndex, selectedLetter) {
            this[gridIndex] = selectedLetter;
          }
        }
        //-----------------------------------------------------
        function removeLetter(gridIndex, gridLetterTag, selectedLetter) {
          for (var i = 0; i < selectedLetters.length; i++) {
            if (selectedLetters[i][gridIndex] === targetHTML.children[i].innerHTML) {
              targetHTML.children[i].remove();
              selectedLetters.splice(i, 1);
            }
          }
          gridLetterTag.removeClass('selected');
          return selectedLetters;
        }
        //-----------------------------------------------------
      });
    });
    //=====================================================
    // 062 When the enter key is pressed, get the selected letters, join them, pass the into the input, and submit.
    $(document).keydown(function(){
      if (event.which === 13) {
        var userWordArray = [];
        selectedLetters.forEach(function(letterObject) {
          userWordArray.push(Object.values(letterObject)[0]);
        });
        var userWord = userWordArray.join('');
        // 067 New Variable. 068 is BELOW.
        var timeEnd = new Date();
        $('#game_data_user_answer')[0].value = userWord;
        // 063 When submit the following function, and not the default should run.
        // $('#user_word').submit(getTheResult());
        // 069 Seems I was heading in the wrong direction, adjusting to fix. MOVE 2 'game.html.erb'
        $('#user_word').submit();
      }
      // 064 A function to get the game data from the simple_form. But since its in ruby... MOVE 2 'game.html.erb'
      function getTheResult() {
        console.log(userWord);
        console.log(timeStart);
        console.log(timeEnd);
        console.log((timeEnd - timeStart)/1000);
        console.log($('#rubyData').data('gridletters'));
        // 068 Since there were a few redefined variables, the controller might have to go through some changes... 069 is ABOVE.
        // request.original_url
      }
    });
    //=====================================================
  };

});