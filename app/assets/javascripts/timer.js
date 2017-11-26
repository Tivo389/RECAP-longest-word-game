// 081 MOVED AND MERGED WITH CLICKABLE. I needed to access the submit function so I merged it with 'clickable.js'. MOVE 2 'clickable.js'

// $(document).ready(function() {
//   // 080 Made timer, scss, etc. Also added lines to clickable.js to stop the clock upon submit.
//   var count = 300;

//   var counter = setInterval(timer, 10);

//   function timer() {
//     if (count <= 0) {
//       clearInterval(counter);
//       document.getElementById("timer").innerHTML = 'Time is up!';
//       $('#user_word').submit();
//       return;
//     } else {
//       if (count % 100 === 1) {
//         count--;
//         document.getElementById("timer").innerHTML = (count / 100) + '.00';
//         return;
//       } else if (count % 10 === 1) {
//         count--;
//         document.getElementById("timer").innerHTML = (count / 100) + '0';
//         return;
//       }
//       count--;
//       document.getElementById("timer").innerHTML = count / 100;
//     }
//   }
// });