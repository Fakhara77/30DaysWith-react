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
    console.log('ETHIPIA')
  } else {
    console.log('Ethiopia');
  }
 


 