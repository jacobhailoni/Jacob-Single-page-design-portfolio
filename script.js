const pictures = document.querySelectorAll(".picture");
//var to check the position of the image
var i = 0;
//function to move the picture which takes n argumnt 
//that gives how much the picture should move
move = (n => {
//if the picture position is 2 or -2 don't move the pic
  if (i === 2 && n > 0) { n = 0 }
  else if (i === -2 && n < 0) { n = 0 }
//else if n is not zero add n value to i and change pictures position 
  if (n !== 0) {
    i += n;
    //looping for all pics and change their x position using translate prop
    pictures.forEach(item => item.style.transform = "translateX(" + i * 100 + "%)");
  }
});