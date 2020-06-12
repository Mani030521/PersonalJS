const obj1 = {
    name: 'Mani',
    age: 21,
    group: 'CSE'
};
const obj2 = {
    name: 'yyy',
    age: 22,
    group: 'CSE'
};
const obj3 = {
    name: 'Manikandan',
    age: 21,
    group: 'CSE'
};

//logs with the name of the object
console.log({ obj1, obj2, obj3})

//logs in a table kind of format for better understanding
//note: Works only in browsers
console.table({ obj1, obj2})

//logs the string with the given css %c converts the second parameter styles and apply those to the first parameter text
//note: Works only in brower environment
console.log('%c MyName', 'color: red')


//logs exactly where the console was defined and where it is called from
const sample = () => console.trace('here is the console')

sample();
sample();