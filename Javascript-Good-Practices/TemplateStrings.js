function sample(str, age){
    return age >= 18 ? `${str[0]} is adult` : `${str[0]} is not an adult` 
}
const age = 18;

//function takes the string in template string as first argument and the following others will be the 
// successive arguments of that function.
console.log(sample`Mani${age}`)