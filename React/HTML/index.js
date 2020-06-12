// function sample() {
// 	var callbacks = []
// 	a()
// 	function a() {
// 		for (let i = 0; i < 5; i++) {
// 			callbacks.push(function () {
// 				return i
// 			})
// 		}
// 		console.dir(callbacks[0])
// 	}
// }
// sample()

// // console.dir(callbacks[0])

// var a = 2
// function as() {
//     function wrappedFunction() {
//         // var a = 12312
//         function sam() {
//             return a
//         }
//         console.dir(sam)
//         return sam()
//     }
//     console.dir(wrappedFunction)
//     return wrappedFunction()
// }

// console.log(as())
// // console.dir(sam)

// const id = Symbol('id')
// const RED = Symbol('RED')

// const ORANGE = Symbol('ORANGE')

// const BLUE = Symbol('BLUE')


// const obj = {
//    [id]: 'id',
// }


// console.log(obj)

function custom(){

}

class Make {
    
    @custom
    fn(){
        return 123123
    }
}