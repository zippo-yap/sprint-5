/* Looping a Triangle
======================*/
var hash = '#';
for (var i = 0; i < 7; i++) {
  console.log(hash);
  hash += '#';
};

/* FizzBuzz
======================*/
for (var x = 1; x <= 100; x++) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("FizzBuzz");
  }
  else if (x % 5 === 0) {
    console.log("Buzz");
  }
  else if (x % 3 === 0) {
    console.log("Fizz");
  }
  else console.log(x);
};

/* Chessboard
======================*/
var size = 8;

// Create a variable to hold your string
var chessString="";

//Create rows of lines
for (var row = 0; row < size; row++) {
//Create characters in each line
  for (var col = 0; col < size; col++){
//Check if position on board is even.
    if((row + col) % 2 === 0){
    chessString += " ";
    }
    else {
    chessString += "#";
    }
  }
//Add a newline after each line has been built
chessString += "\n";
}

console.log(chessString);
