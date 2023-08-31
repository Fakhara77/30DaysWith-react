//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]

let index=countries.indexOf('Ethiopia');
 if (index != -1) {
    console.log('This countries does exist in the array')
  } else {
    console.log('This countries does not exist in the array');
  }
 countries[4]='ETHIOPIA';
 console.log(countries);


 