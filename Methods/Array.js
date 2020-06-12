// Array.from()
const a = Array.from([1,2,3])
console.log(a) // Logs [1,2,3]

/**------------------------------------------ */

// Array.isArray()
const a = [1,2,3]
console.log(Array.isArray(a)) // Logs true

/**------------------------------------------ */

// Length Prop
const a = [1,3]
console.log(a.length) //Logs Length 2 of the array

/**------------------------------------------ */

//concat()
const a = [1,2]
const b = [2,3]
console.log(a.concat(b)) //Logs [1,2,2,3] as a new Array doesn't change the original Array

/**------------------------------------------ */

//filter()
const a = [1,2,3,3,4]
const b = a.filter((currentElement, currentIndex, originalArray) => currentElement >= 2)
console.log(b) // Logs [2,3,3,4] as a new Array will not change the original array(a)

/**------------------------------------------ */

//find()
const a = [1,2,3]
const b = a.find((currentElement, currentIndex, originalArray) => currentElement === 1)
console.log(b) // Logs 1 the value that is found and will not change the original array(a)

/**------------------------------------------ */

//findIndex()
const a = [1,2,3,3]
const b = a.findIndex((currentElement, currentIndex, originalArray) => currentElement === 3)
console.log(b) //Logs 2 even though 3 is in 2 places logs the first find index, original array wil not change


/**------------------------------------------ */

//forEach()
const a = [1,3,4,5,3]
a.forEach((currentElement, currentIndex, originalArray) => {
    console.log(currentElement)
})// Used to perform any operations just like for loop and changes the original array


/**------------------------------------------ */

//includes()
const a = [1,2,3,4]
console.log(a.includes(2)) 
// Logs whether true or false depending on the given argument in the includes() will not change the original array

/**------------------------------------------ */

//indexOf()
const a = [1,2,3,4]
console.log(a.indexOf(2))
//Logs  1 if not present logs -1

/**------------------------------------------ */

//map()
const a = [1,2,3]
const b = a.map(a => a + 100)
console.log(b)
// Logs [101, 102, 103] as a new array in b the original array stays the same [1,2,3]

/**------------------------------------------ */

//pop()
const a = [1,2,3]
console.log(a.pop())
// Logs [1,2]

/**------------------------------------------ */

//push()
const a = [1,2,3]
console.log(a.push(1,3))
//Logs [1,2,3,1,3] as the original array and returned value as 5(length of the array)

/**------------------------------------------ */

//reverse()
const a = [1,3,4]
console.log(a.reverse())
//Logs [4,3,1] as the original array and changes the original array

/**------------------------------------------ */

//shift()
const a = [1,3,4,5]
console.log(a.shift())
//Logs [3,4,5] as the original array same as like pop only difference is removes element from the first
//(follows Queue)

/**------------------------------------------ */

//unshift()
const a = [1,2,3,4]
console.log(a.unshift(9))
//Logs [9,1,2,3,4] just like push only diff is adds element in beginning and returns the length of array

/**------------------------------------------ */

//slice()

 


/**------------------------------------------ */

//splice()
const a = [1,3,24,5,6]
const b = a.splice(2, 2)
console.log(b)
//Logs [24, 5] the removed elements from the original array and original array wil be [1,3,6]
