//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge=parseInt(prompt('please Enter your age'));
let yourAge=parseInt(prompt('please Enter your age'));
if(myAge>yourAge){
    console.log('you are older than me');
}else if(myAge<yourAge){
    console.log('I am older than you');
}