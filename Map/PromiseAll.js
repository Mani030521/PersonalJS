function firstPromise(data) {
	return new Promise(res => {
		res(data + "Manikandan")
	})
}

function secondPromise(data) {
	return new Promise(res => {
		res(data + "Mani")
	})
}

function thirdPromise(data) {
	return new Promise(res => {
		res(data + "Manikandan Arjunan")
	})
}

// Promise.all([firstPromise(), secondPromise(), thirdPromise()]).then(data => {
//     console.log(data)
// })

// [firstPromise, secondPromise, thirdPromise].reduce((p,f) => {
//    return p.then(f)
// }, Promise.resolve()).then(data => {
//     console.log(data)
// })

const accFunc = (acc, val) => acc.then((data) => val(data))
const promiseResolveAll = (...funcs) => data => funcs.reduce(accFunc, Promise.resolve(data))


promiseResolveAll(firstPromise, secondPromise, thirdPromise)("Hi").then(data => console.log(data))