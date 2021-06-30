/* (4) Напишите функцию, которая в переданной строке ищет самое длинное слово и возвращает его длину. */

function findLongestWordLeng(string)  {
  let stringSplit = string.split(' ');
  console.log(stringSplit);

  let longestWord = '';

  for (let i = 0; i < stringSplit.length; i++) {
    if (stringSplit[i].length > longestWord) {
      longestWord = stringSplit[i];
    }
  }
  return longestWord.length;
}
let longestWordAvailable = findLongestWordLeng('Аргентина манит негра');
console.log(longestWordAvailable);
