/* 
1. Bir dizideki kelimelerden sadece belirli bir uzunluğa sahip olanlarını filtreleyin. (Uzunluk: 3)

Örnek Dizi: ['cat', 'dog', 'elephant', 'rat', 'bat'] 

2. Bir dizideki her sayıyı mutlak değere çevirmek için map metodunu kullanın.

Örnek Dizi: [-1, -2, -3, -4, -5]
*/

//S-1

function filterByLength(words) {
    return words.filter(word => word.length === 3);
  }
  let words = ['cat', 'dog', 'elephant', 'rat', 'bat'];
  let filteredWords = filterByLength(words);
  console.log(filteredWords);

  //S-2
  let numbers = [-1, -2, -3, -4, -5];
  let absoluteValues = numbers.map(number => Math.abs(number));
  console.log(absoluteValues);

