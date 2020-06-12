// function a(){
    
//     // console.log(this,'inside a')
//      function c(){
//         // console.log(this,'inside b')
//     }
//     c();
//     a.prototype.b()
// }
// a.prototype.b = function(){
//     console.log(this ,'inside b')
//     // console.log(th,'inside b')
// }
// const temp = new a()

// // const a1 = new a('Mani');
// // console.log(a());
// // a.apply({name: 'Mani'})
// // document.getElementById('buttons').addEventListener('click', function() {
// //     console.log(this)
// // })
// // if(typeof window !== undefined){
// //     // console.log(document.getElementById('buttons'))
// // }
// // function clickHandler(){
// //     console.log(this)
// // }

// // console.log('6'.charCodeAt());
// // const sample = (fun, ...x) => (...y) => fun(...x,...y)


// // const argumentFunction = (...all) => console.log('array of all', all)

// // sample(argumentFunction,1,2,3)(4,5,6)



// const obj = {
//     name: 'Mani',
//     method1(){
//         const that = this;
//         console.log(this.name)
//         return function(){
//             console.log(that.name)
//             return null;
//         }
//     }
// }

// console.log(obj.method1()())

const obj1 = {
    name: "vinothini",
    getName: function(){
        return this.name
    }
}

const obj2 = {
    name: "Manikandan",
    getName: obj1.getName
}

var name = obj1.getName
console.log(obj1.getName())
console.log(name())
console.log(obj2.getName())