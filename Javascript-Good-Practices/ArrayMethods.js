const arr = [1,2,3,4,5,6,7,7,8,9,21,4,2,2];

//reduce 

const total = arr.reduce((acc, current) => {
   return acc + current
})

console.log(total)

//map gives new Array

const newArr = arr.map(arr => arr * 2)

console.log(newArr)

//filter gives new Array

const newArrFilter = arr.filter(arr => arr<6)

console.log(newArrFilter)