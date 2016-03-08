var input = prompt("Please type a number between 1 and 100.");
var number = parseInt(input);


function fizzbuzz (number){
    for(var i = 1; i <= number; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            document.write( "fizzbuzz" + "<br>" );
        }
        else if ( i % 5 == 0) {
            document.write(  "buzz" + "<br>");
        }
        else if  ( i % 3 == 0 ) { 
            document.write( "fizz" + "<br>");
        }
        else {
            document.write(  i + "<br>");
        }
    }
}

console.log(fizzbuzz(number));