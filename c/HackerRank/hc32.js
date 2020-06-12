const scores = [100, 100, 90, 50, 50, 40, 20, 10]
const alice = [5, 25, 50, 120]

function contains(arr, value) {
	for (let i = 0; i < arr.length; i++) {
		if (value === arr[i]) {
			return true
		}
	}
	return false
}
function duplicate(arr) {
	const result = []
	for (let i = 0; i < arr.length; i++) {
		if (!contains(result, arr[i])) {
			result.push(arr[i])
		}
	}
	return result
}

function binaryIndex(arr, value, lowIndex, highIndex) {
	if (lowIndex > highIndex) {
		return lowIndex + 1;
	}

    let midIndex = lowIndex + Math.trunc((highIndex - lowIndex) / 2)
	if (value === arr[midIndex]) {
		return midIndex + 1;
	}
	if (value > arr[midIndex]) {
		return binaryIndex(arr, value, lowIndex, midIndex - 1)
	}
	return binaryIndex(arr, value, midIndex + 1, highIndex)
}

const dupli = duplicate(scores)

for (let i = 0; i < alice.length; i++) {
	const a = binaryIndex(dupli, alice[i], 0, dupli.length - 1)
	console.log(a)
}



// const str = 'Javascript'

// console.log(str.substr(1,4))
// console.log(str.substring(1,2))
