//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
let a=4;
let b=2;
 

if(a>b){
    console.log('a is greater than b')
}else if(a<b){
    console.log('a is less than b')
}
//ternery operator


function isCheck(a,b){
    return a > b ? 'a is greater than b':'a is less than b';
}
console.log(isCheck(4,8));