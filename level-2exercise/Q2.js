//Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer 
 let userInput=prompt('Enter the name of month please');
 if(userInput=== 'September' || userInput=== 'October' || userInput === 'November'){
    alert('the season is Autumn');
 }else if(userInput=== 'December' || userInput === 'January' ||userInput === 'February'){
    alert('the season is Winter');
 }else if(userInput===  'March' || userInput === 'April' ||userInput === 'May'){
    alert('the season is Spring');
 }else if(userInput=== 'June' || userInput=== 'July' ||userInput ==='August'){
    alert('the season is Summer');

 }else{
    alert('please enter the invailed Input');
 }  

 
 
 
 
 
 
 