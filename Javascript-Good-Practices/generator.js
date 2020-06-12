// // const firstPromise = () => {
// // 	return new Promise((resolve, reject) => {
// // 		setTimeout(() => resolve(1), 5000);
// // 	});
// // };

// // const secondPromise = () => {
// // 	return new Promise((resolve, reject) => {
// // 		setTimeout(() => resolve(2), 3000);
// // 	});
// // };

// // async function* generator() {
// // 	const firstPromiseResult = yield firstPromise();
// // 	// yield firstPromiseResult;
// // 	const secondPromiseResult = yield secondPromise();
// // 	// yield secondPromiseResult;
// // }

// // generator().next().then(data => {
// //   console.log(data)
// // })
// // generator().next().then(data => {
// //   console.log(data)
// // })
// // // console.log(generator().next())

// function* promise(){
//   yield new Promise((res, rej) => {
//     setTimeout(() => {
//       res('After 2 seconds')
//     }, 2000)
//   })
// }

// function* generator(){
//   yield *promise()
//   yield 'second Statement'
// }

// generator().next().value.then(data => {
//   console.log(data)
//   console.log(generator().next())
// })

const promiseCreator = (time) =>
	new Promise((res, rej) => {
		setTimeout(() => {
			res('1st Promise executed after' + time + 'seconds');
		}, time * 1000);
	});
const promise1 = (time) => promiseCreator(time);
const promise2 = (time) => promiseCreator(time);

function* generator() {
	const value = yield promise1(3);
	yield promise2(5);
  yield 'asd';
  yield value
}

const gen = generator();

// while (!gen.next().done) {
//   const pointer = gen.next().value
// 	if (pointer && pointer.__proto__ === Promise.prototype) {
// 		pointer.then((data) => {
// 			pointer.next(data)
// 		});
// 	} else {
//     console.log(pointer)
// 		// console.log(typeof gen.next().value,'====');
// 	}
// }

// async function* generatorHandler(generatorFun) {
// 	const gen = generatorFun();
// 	function promiseChecker(value) {
// 		if (value.__proto__ === Promise.prototype) {
// 			return true;
// 		}
// 		return false;
// 	}

// 	for (const g of gen) {
// 	  if(promiseChecker(g)){
//       const res = await g
// 	  }
// 	}
// }

// const gen1 = generatorHandler(generator)
// console.log(gen1.next().value);
