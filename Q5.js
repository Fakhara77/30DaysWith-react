//in this s array check if Sass existin the webTechs the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ];
  for(key of webTechs){
  if(webTechs.includes('CSS')){
    console.log('Sass is a CSS preprocess')
  }else{
    console.log('CSS is not includesin webtechs');
  }
 
  }
  