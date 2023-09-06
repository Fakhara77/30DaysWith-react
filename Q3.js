//Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof;
const dog={
    name:'puppy',
    legs:'four',
    color:'brown && white',
    age:7,
    bark:function() {
       return 'woof woof' ;
    }
}

console.log(dog.bark());