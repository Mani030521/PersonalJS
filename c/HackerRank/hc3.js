const scores = [
	999985251,
	999982008,
	999971585,
	999969161,
	999968066,
	999959323,
	999957896,
	999911290,
	999896854,
	999865891,
	999854999,
	999847623,
	999828142,
	999808517,
	999808344,
	999802878,
	999787403
]
const alice = []
let rank = []
let pushFlag = false
let count = 1
let temp = null

if (alice.length === 0) {
	for (let i = 0; i < scores.length; i++) {
		if (temp && temp > scores[i]) {
			count++
		}
		temp = scores[i]
        rank.push(count)
	}
} else {
	for (let i = 0; i < alice.length; i++) {
		count = 1
		for (let j = 0; j < scores.length; j++) {
			if (alice[i] > scores[j] || alice[i] === scores[j]) {
				if (j === 0) {
					pushFlag = true
					scores.splice(j, 0, alice[i])
					break
				} else {
					pushFlag = true
					scores.splice(j, 0, alice[i])
					count++
					break
				}
			} else if (temp && temp > scores[j]) {
				console.log("com")
				count++
			}
			temp = scores[j]
		}
		if (!pushFlag) {
			scores.splice(scores.length, 0, alice[i])
			rank.push(++count)
		} else {
			rank.push(count)
		}
	}
}

console.log(rank)
