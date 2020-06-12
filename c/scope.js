// function b(){
//     var name = 'Mani'
//     return a();
// }

// function a(){
//     console.log(name);
// }

// b()


// function add(){
//     c = 0
//     return function(){
//         c = c + 1;
//         return c;
//     }
// }

// const a = add();
// console.log(a());
// console.log(a());

// const myNumber = '3';
// (function (callback) {
//   console.log(myNumber);
//   const myText = 'hello';
//   callback();
// })(function () {
//     console.log(myNumber);
//     console.log(myText);
//   })


const bestAvenger = 'Iron man';
function a () {
  const bestActor = "Neymar";
  console.log(bestAvenger); // output:Iron man
  function c() {
    const bestProgrammingLanguage = 'Html';
    console.log(bestAvenger); // output:Neymar
    b();
  }
  c();
}
function b() {
//   console.log(bestProgrammingLanguage); // not defined error
}
a();