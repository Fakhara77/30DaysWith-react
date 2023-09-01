
//The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]  - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort((a,b)=>(a-b));

console.log(ages);
const getMinNum=(ages)=>{
  return ages.reduce((smNum,num)=>
   Math.min(smNum,num)

  );

};
console.log(getMinNum(ages));
const getMixNum=(ages)=>{
  return ages.reduce((slNum,num)=>
   Math.max(slNum,num)

  );

};

console.log(getMixNum(ages));
let median;
if(ages.length%2!==0){
  let middleIndex=Math.floor(ages.length/2);
  median=ages[middleIndex]
}else{
  let middleIndex=Math.floor(ages.length/2);
  median=(ages[middleIndex]+[middleIndex-1]/2);
}
console.log( 'median:', median);
let averge;
let average=ages.reduce((accu,curr,index,ages)=>{
    let total=accu+=curr;
    if(index===ages.length-1){
    return total/ages.length
    }
    return total;
});
console.log(average);
let abs=Math.abs(22.8);
console.log(abs);