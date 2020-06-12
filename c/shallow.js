// const obj1 = {
//     level: {
//         enumerable: true,
//         level2: 'hi'
//     }
// }

// const obj2 = {
//     getDate(){
//         console.log(03)
//     }
// }

// // Object.assign(obj2, obj1)

// // console.log(obj2)
// // console.log(obj1)

// let objas = Object.create(obj1,{b: {
//     value: 'asd',
// }})
// let news = Object.assign(obj2, objas)
// console.log(news)

let obj = { 
    a: 'a',
    b: { 
      c: 'c',
      d: 'd',
    },
  }
  
  obj.c = obj.b;
  obj.e = obj.a;
  obj.b.c = obj.c;
  obj.b.d = obj.b;
  obj.b.e = obj.b.c;

  console.log(obj)