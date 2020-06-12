// /* curry pattern - partial function calling */

var curryMe = function (fn) {
	var slice = Array.prototype.slice;
	var stores_args = slice.call(arguments, 1);
	console.log(stores_args,'===')
	return function(){
		var new_args = slice.call(arguments)
		var args = stores_args.concat(new_args);
		console.log(args,'===')
		return fn.apply(null, args);
	}
}

var curryMe2 = function (fn) {
	var slice = Array.prototype.slice;
	var stores_args = slice.call(arguments, 1);
	let prevValue
	return function(){
		var new_args = slice.call(arguments)
		var args = prevValue ? new_args.concat(prevValue) : stores_args.concat(new_args);
		prevValue = fn.apply(null, args)
		return prevValue
	}
}

var add = function(...args){
	return args.reduce((prev, current) => {
		return prev + current
	})
}

// var newAdd = curryMe(add, 5);
// console.log(newAdd(4,1))//9
// console.log(newAdd(10))//9
// console.log(newAdd(-1))//9

/* Another Method --------------------------------------------------------- */

var continiousAdd = curryMe(add, 5, 2)
console.log(continiousAdd(3))


// function CustomArray(){}

// CustomArray.prototype.slice = function(){
// 	const arr = []
// 	for(let i in this){
// 		arr.push(this[i])
// 	}
// 	return arr
// }

// const obj ={
// 	name: 'amani',
// 	dept: 'asa',
// }
// function s (){
// 	console.log(typeof arguments)
// 	console.log(CustomArray.prototype.slice.bind(arguments)())
// 	// console.log(Array.prototype.slice.call(obj))
// 	// console.log(Array.prototype.slice.call(arguments))
// }


// s(1,2,2,2)