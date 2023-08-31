// in the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]
  let index=webTechs.indexOf('Sass');
  if (index !=-1){
    console.log('this is  existsin this array');
  }else{
    console.log('this is not exists in this array');
  }
  webTechs.push('Sass');
  console.log(webTechs);