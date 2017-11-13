$(document).ready(function() {
  // 056 Put the line below to ensure the file was being compiled correctly :)
  // console.log('DOM READY!!');
  // 057 When the letters on mousedown (not click since it requires user to click-off on theletter) do the following...

  acceptUserLetters();

  function acceptUserLetters() {
    var input = [];
    $('div.grid__container').children().each(function(gridIndex) {
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
              console.log(input);
              return input;
              break;
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
              console.log(input);
              return input;
              break;
            }
          case 2: // Middle
            break;
          case 3: // Right
            break;
        }
        // 059 After 058 was complete I needed to show the same letters in the & pass it to the input. 060 is ABOVE.
      });
    });
  };

});