
		for (var i = 1; i < 101; i++) {

			if (i % 3 == 0 && i % 5 == 0) { //divisble by 3 and 5 = fizzbuzz
				document.write( "fizzbuzz" + "<br>" );
			} 
			else if ( i % 5 == 0) { //divisble by 5 = buzz
				document.write(  "buzz" + "<br>");
			}
			else if  ( i % 3 == 0 ) {  //divisble by 3 = fizz
				document.write( "fizz" + "<br>"); 
			}
			else {
				document.write(  i + "<br>");
			}
		}

