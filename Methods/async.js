
function sample(sec) {
	return new Promise((res, rej) => {
		console.log("started at " + sec)
		setTimeout(() => {
			console.log("ended at " + sec)
			res('he')
		}, sec * 1000)
	})
}

// ;(async () => {
// 	const a = sample(1)
// 	const b =  sample(2)
// 	const c =  sample(3)

//     const result = await a + await b + await c
// 	console.log(result)
// })()


async function sequential(values){
    const b = []
    for (let i = 0 ; i<values.length;i++){
        const a = await sample(values[i])
        b.push(a)
    }
    console.log(b)
    // // const a = values.map(value => sample(value))
    // const a = values.reduce(async (acc, curr) => {
    //     const a = await acc + await sample(curr)
    //     return a
    //     // return await sample(curr) + await acc
    // }, Promise.resolve(''))
    // console.log(await a)
    // // const result = await Promise.all(a)
    // // console.log(result)
}

async function parallel(values){
    const a = await Promise.all(values.map(value => sample(value)))
    console.log(a)
}

const values = [1,2,3]

// sequential(values)
parallel(values)
