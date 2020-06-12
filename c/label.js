// const car = {
//     name: 'fiat',
//     arr: [12,2,2,2,2],
//     year: 123,
//     born: {
//         country: 'Italy'
//     }
// }
// const arr = [1,2,3,4,4]
// for(let i in arr){
//     console.log(arr[i])
// }
// // for(let i in car){
// //     console.log(typeof i)
// //     console.log(i,car[i])
// // }

function myConcat(separator) {
    var result = ''; // initialize list
    var i;
    // iterate through arguments
    console.log(separator)
    console.log(arguments)
    for (i = 1; i < arguments.length; i++) {
       result += arguments[i] + separator;
    }
    return result;
 }


 console.log(myConcat(',','red','blu'))