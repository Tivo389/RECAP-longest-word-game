$(document).ready(function() {
  // 056 Put the line below to ensure the file was being compiled correctly :)
  // console.log('DOM READY!!');
  var input = [];
  // 060 Did some refactoring. 061 is BELOW.
  playWordGame();

  // playWordGame START
  function playWordGame() {
    getUserInput();
  };
  // playWordGame END

  // getUserInput START
  function getUserInput() {
    $('div.grid__container').children().each(function(gridIndex) {
      // 057 When the letters on mousedown (not click since it requires user to click-off on theletter) do the following...
      $(this).mousedown(function() {
        var selectedAlphabet = this.innerHTML;
        function inputAlphabet(gridIndex, selectedAlphabet) {
          this[gridIndex] = selectedAlphabet;
        }
        switch (event.which) {
          case 1: // Left
            // 057a Add a class to grey it out and make it unclickable. MOVE 2 '_game.scss'
            // 058 If not selected, add class, add to array as an object with gridIndex (to accomodate for same alphabets).
            if ($(this).hasClass('selected') === false) {
              input.push(new inputAlphabet(gridIndex, selectedAlphabet));
              $(this).addClass('selected');
              // 061 Make a new function that will duplicate (this? i think) into the word div area. CONTINUE HERE
              return input;
            } else {
              input.forEach(function(object, arrayIndex) {
                // Index of letter in the grid.
                  // console.log(gridIndex);
                // Value of the object. It will either be 'undefined' or return the alphabet you clicked.
                  // console.log(object[gridIndex]);
                // Index of object in array, indicating order it was clicked.
                  // console.log(arrayIndex);
                if (object[gridIndex] === selectedAlphabet) delete input[arrayIndex];
              });
              $(this).removeClass('selected');
              return input;
            }
          case 2: // Middle
            break;
          case 3: // Right
            break;
        }
      });
    });
  };
  // 059 After 058 was complete I needed to show the same letters to the user & pass it to the input. 060 is ABOVE.
  // getUserInput END

});