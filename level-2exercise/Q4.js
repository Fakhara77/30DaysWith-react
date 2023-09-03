//Check if a day is weekend day or a working day. Your script will take day as an input.
let input= prompt('what is  the day today?');
if(input==='saturday'){
    console.log("sturday is a weekend");
}else if(input ==='sunday'){
    console.log('sunday is weekend');
}else if(input ==='monday'){
    console.log('monday is a woerking day');
}else if(input ==='tuesday'){
    console.log('tuesday is working day');
}else if(input === 'wednesday'){
    console.log('wednesday is working day');
}else if(input ==='thursday'){
    console.log('thursday is working day');
}else if(input === 'friday'){
    console.log('friday is working day');
}else{
    console.log('enter the valid day');
}