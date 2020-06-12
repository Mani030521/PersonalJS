console.log('Synchronous 1');

setTimeout(() => console.log(`Timeout 2`), 0);

Promise.resolve().then(() => console.log(' Promise 3'));

console.log('Synchronous 4');

function scree(sa){
    return sa;
}

scree('asd')


// function* sample(a, b){
//     yield a+b;
//     yield 'Mani'
    
// }


// const s = sample(1,2);
// console.log(s)