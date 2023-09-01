//First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
   
  text=text.replaceAll('.','',',',' ');
 console.log(text);
 const words=text.split(' ');
 console.log(words);
 console.log(words.length);