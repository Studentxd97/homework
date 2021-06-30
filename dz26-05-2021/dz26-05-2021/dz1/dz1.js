

function isPrime (numr) {

  for (let i = 2; i < numr; i++ ) {
    if (numr % i === 0 ) {
      return false;
    }
  }

  return true;
}

let i = 0;
 
while (i < 5 )  {
 	
	let num = prompt('Введите число');

	if (isPrime(num) == true && num != 1) {
		alert(num);
		break;
	}

	i++ ;
}
