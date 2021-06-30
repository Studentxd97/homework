/* (4) Напишите функцию, которая вызывается и работает следующим образом:
console.log( multi(2)(3)(4) ); // 24 */

 // way 1

 function multi(a){
  return function(b){
    return function(c){
      return a * b * c;
    }
  }
}

console.log(multi(2)(3)(4));
