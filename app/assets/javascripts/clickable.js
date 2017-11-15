$(document).ready(function() {

  // 056 Put the line below to ensure the file was being compiled correctly :)
  // console.log('DOM READY!!');
  playWordGame();

  function playWordGame() {
    var selectedLetters = [];
    clickLetter();
    function clickLetter() {
      $('div.grid__container').children().each(function(gridIndex) {
        $(this).mousedown(function() {
          var targetHTML = document.querySelector('div.letters__container');
          var selectedLetter = this.innerHTML;
          var letterNotSelected = $(this).hasClass('selected') === false;
          switch (event.which) {
            case 1: // Left
              // 057 When left mousedown letter (not click; it req user to click-off) do the following...
              if (letterNotSelected) {
                addLetter(this, gridIndex, selectedLetter);
                console.log(selectedLetters.length);
              } else {
                removeLetter(gridIndex, selectedLetter);
                console.log(selectedLetters.length);
              }
            case 2: // Middle
              break;
            case 3: // Right
              break;
          }
          //-----------------------------------------------------
          function addLetter(gridLetterTag, gridIndex, selectedLetter){
            // 057a Add a class to grey it out. MOVE 2 '_game.scss'
            $(this).addClass('selected');
            // 058  Then add to array as an object with gridIndex (to accomodate for same alphabets).
            selectedLetters.push(new makeGridLetterObj(gridIndex, selectedLetter));
            // 059 Make a new function that will duplicate the html (gridLetterTag) into the word div area. MOVE 2 'game.html.erb'
            addSelectedLetters(gridLetterTag);
            return selectedLetters;
            function makeGridLetterObj(gridIndex, selectedLetter) {
              this[gridIndex] = selectedLetter;
            }
            // 062 Function that will duplicate the html. 063 is BELOW.
            function addSelectedLetters(gridLetterTag) {
              targetHTML.insertAdjacentHTML('beforeend', gridLetterTag.outerHTML);
            }
          }
          //-----------------------------------------------------
          function removeLetter(gridIndex, selectedLetter) {
            $(this).removeClass('selected');
            removeSelectedLetter(gridIndex);
            selectedLetters.forEach(function(object, arrayIndex) {
              if (object[gridIndex] === selectedLetter) {
                selectedLetters.splice(arrayIndex, arrayIndex + 1);
              } else if (object.length === 1) {
                selectedLetters = [];
              }
            });
            return selectedLetters;
            // 063 Function that will remove the correct letter from the html. / BUG... ISSUE WITH REMOVAL CONTINUE HERE /
            function removeSelectedLetter(gridIndex) {
              selectedLetters.forEach(function(object, arrayIndex) {
                if ((targetHTML.children[arrayIndex] !== undefined) && (object[gridIndex] !== undefined) && (object[gridIndex] === targetHTML.children[arrayIndex].innerHTML)) {
                  targetHTML.children[arrayIndex].remove();
                } else if (selectedLetters.length === 1) {
                  targetHTML.removeChild(targetHTML.firstChild);
                }
              });
            }
          }
          //-----------------------------------------------------
        });
      });
    };
  };

});