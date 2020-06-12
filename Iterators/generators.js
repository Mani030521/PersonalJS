// function* gen() {
//     let num = 1
//     while(true){
 
// 		yield num;
// 		num = num + 1
//     }
// }

// function* common(n, iterator) {
// 	let index = 0
// 	for (const i of iterator) {
// 		if (index >= n) {
// 			return {
// 				value: undefined,
// 				done: true
// 			}
// 		}
// 		index = index + 1
// 		yield i
//     }
// }

// const com = common(10, gen());


// console.log(com.next().value)
// console.log(com.next().value)
// console.log(com.next().value)
// console.log(com.next().value)
// console.log(com.next().value)
// console.log(com.next().value)
// console.log(com.next().value)
// console.log(com.next().value)
// console.log(com.next().value)
// console.log(com.next().value)
// console.log(com)
// // console.log(common(10, gen()).next().value)


function* gen(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

for(const {value} of gen().next()){
    console.log(value)
}