// Write your code here
let temp
let a = [4, 6, 5, 3, 3, 1 ]
let initialCount = 1
let tempVariable
for (let i = 0; i < a.length - 1; i++) {
	for (let j = 0; j < a.length - i - 1; j++) {
		if (a[j] > a[j + 1]) {
			temp = a[j]
			a[j] = a[j + 1]
			a[j + 1] = temp
		}
	}
}
let count = 1
let finalCount = []
for (let i = 0; i < a.length - 1; i++) {
	count = 1
	initialCount = 1
	tempVariable = a[i]
	while (initialCount < 2) {
		if (Math.abs(tempVariable - a[i + 1]) >= 2) {
			initialCount++
		} else {
			if (i === a.length - 1) {
				initialCount++
			} else {
				count++
				i++
			}
		}
	}
	finalCount.push(count)
}

    finalCount = finalCount.sort((a, b) => b - a);

console.log(finalCount)
