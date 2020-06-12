let a = [
    [4,9,2],
    [3,5,7,],
    [8,1,6],
];

const a1 = [].concat.apply([], a)
console.log(a1)
const b = [
    [8, 1, 6, 3, 5, 7, 4, 9, 2],
    [4, 3, 8, 9, 5, 1, 2, 7, 6],
    [2, 9, 4, 7, 5, 3, 6, 1, 8],
    [6, 7, 2, 1, 5, 9, 8, 3, 4],
    [6, 1, 8, 7, 5, 3, 2, 9, 4],
    [8, 3, 4, 1, 5, 9, 6, 7, 2],
    [4, 9, 2, 3, 5, 7, 8, 1, 6],
    [2, 7, 6, 9, 5, 1, 4, 3, 8]
]

let sum = 0;
let cost  = [];
for(let i=0;i<b.length;i++){
    sum = 0;
    for(let j=0;j<b[i].length;j++){
            sum = sum + Math.abs(b[i][j] - a1[j]);
    }
   cost.push(sum)
}
console.log(cost.sort((a,b) => a-b))



